import { ref, update } from "firebase/database";

import { database } from "Firebase/config";

import { ISettings } from "./models";
import { RTDB_PATH_NAME } from "./consts";

/**
 * Обновляет существующие настройки виджета по его ID.
 *
 * @param widgetId - Уникальный ID виджета, сгенерированный методом push().
 * @param newSettings - Объект с новыми настройками, которые нужно обновить.
 *                      Можно передавать только те поля, которые нужно изменить.
 * @returns Promise<boolean> - Возвращает true, если обновление прошло успешно, false в противном случае.
 */
export async function updateSettings(
  widgetId: string,
  newSettings: Partial<ISettings>,
): Promise<boolean> {
  if (!widgetId) {
    console.error(
      "Ошибка: widgetId не может быть пустым при обновлении настроек.",
    );
    return false;
  }

  try {
    const widgetRef = ref(database, `${RTDB_PATH_NAME}/${widgetId}`);
    await update(widgetRef, newSettings);
    console.log(`Настройки виджета с ID ${widgetId} успешно обновлены.`);
    return true;
  } catch (error) {
    console.error(
      `Ошибка при обновлении настроек виджета с ID ${widgetId}:`,
      error,
    );
    return false;
  }
}
