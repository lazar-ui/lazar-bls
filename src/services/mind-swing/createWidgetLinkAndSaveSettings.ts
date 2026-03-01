import { ref, push, set } from "firebase/database";

import { database } from "Firebase/config";

import { ISettings } from "./models";
import { RTDB_PATH_NAME } from "./consts";

export async function createWidgetLinkAndSaveSettings(
  settings: ISettings,
): Promise<string | null> {
  try {
    const widgetListRef = ref(database, RTDB_PATH_NAME); // Ссылка на коллекцию настроек виджетов
    const newWidgetRef = push(widgetListRef); // Генерируем новый уникальный ключ

    if (newWidgetRef.key) {
      await set(newWidgetRef, settings); // Сохраняем настройки по этому ключу
      console.log(`Новый виджет создан с ID: ${newWidgetRef.key}`);
      return newWidgetRef.key; // Возвращаем сгенерированный ID
    }
    return null;
  } catch (error) {
    console.error("Ошибка при создании виджета и сохранении настроек:", error);
    return null;
  }
}
