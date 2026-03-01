import { child, DataSnapshot, get, ref } from "firebase/database";

import { database } from "Firebase/config";

import { RTDB_PATH_NAME } from "./consts";
import { ISettings } from "./models";

/**
 * Читает настройки виджета из Realtime Database по его уникальному ID.
 *
 * @param savedId - Уникальный ID виджета (сгенерированный методом push()).
 * @returns Promise<WidgetSettings | null> - Возвращает объект настроек виджета,
 *                                           если он найден, иначе null.
 */
export async function getSettingsById(
  savedId: string,
): Promise<ISettings | null> {
  if (!savedId) {
    console.error(
      "Ошибка: widgetId не может быть пустым при получении настроек.",
    );
    return null;
  }

  try {
    const dbRef = ref(database); // Получаем корневую ссылку на базу данных
    const widgetRef = child(dbRef, `${RTDB_PATH_NAME}/${savedId}`); // Создаем ссылку на конкретный виджет

    const snapshot: DataSnapshot = await get(widgetRef); // Получаем данные один раз

    if (snapshot.exists()) {
      // Если данные существуют, возвращаем их, преобразованные к типу WidgetSettings
      const settings = snapshot.val() as ISettings;
      console.log(
        `Настройки виджета с ID ${savedId} успешно получены:`,
        settings,
      );
      return settings;
    } else {
      console.log(`Настройки виджета с ID ${savedId} не найдены.`);
      return null;
    }
  } catch (error) {
    console.error(
      `Ошибка при получении настроек виджета с ID ${savedId}:`,
      error,
    );
    return null;
  }
}
