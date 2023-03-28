/**
 * Generates a short ID.
 * @param {number} [length=6] - The desired length of the ID.
 * @return {string} A string composed of uppercase and lowercase letters, and digits with the desired length.
 *
 * @example
 * genId(8)
 * //"AzW20pG1"
 */
export function genId(length: number = 6): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}
