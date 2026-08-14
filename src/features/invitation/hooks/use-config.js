import staticConfig from "@/config/config";

/**
 * Custom hook to access wedding configuration
 * Returns static config directly (no API calls)
 *
 * @returns {object} Wedding configuration data
 */
export function useConfig() {
  // Возвращаем статический конфиг, без запросов к API
  return staticConfig.data;
}
