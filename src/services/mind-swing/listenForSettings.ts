import { DataSnapshot, onValue, ref, Unsubscribe } from "firebase/database";
import { ISettings } from "./models";
import { database } from "Firebase/config";
import { RTDB_PATH_NAME } from "./consts";

/**
 * Устанавливает слушателя для получения обновлений настроек виджета в реальном времени.
 *
 * @param widgetId - Уникальный ID виджета.
 * @param callback - Функция, которая будет вызываться при каждом изменении настроек.
 *                   Получает WidgetSettings или null, если данных нет.
 * @returns Unsubscribe - Функция для отмены слушателя.
 */
export function listenForSettings(
  widgetId: string,
  callback: (settings: ISettings | null) => void,
): Unsubscribe | null {
  if (!widgetId) {
    console.error(
      "Ошибка: widgetId не может быть пустым при прослушивании настроек.",
    );
    callback(null);
    return null;
  }

  const widgetRef = ref(database, `${RTDB_PATH_NAME}/${widgetId}`);

  // onValue возвращает функцию для отписки
  const unsubscribe = onValue(
    widgetRef,
    (snapshot: DataSnapshot) => {
      if (snapshot.exists()) {
        const settings = snapshot.val() as ISettings;
        console.log(
          `Получены реальные обновления для виджета ${widgetId}:`,
          settings,
        );
        callback(settings);
      } else {
        console.log(
          `Настройки виджета с ID ${widgetId} не найдены или удалены.`,
        );
        callback(null);
      }
    },
    (error) => {
      console.error(
        `Ошибка реального времени при получении настроек виджета ${widgetId}:`,
        error,
      );
      callback(null);
    },
  );

  return unsubscribe; // Возвращаем функцию отписки
}
