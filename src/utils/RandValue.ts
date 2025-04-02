/**
 * Get a random time between 1000, 2000, 3000
 * to simulate different API response times
 *
 * @returns
 */
export const randTime = (): number => {
  return (Math.floor(Math.random() * 3) + 1) * 1000
}
