export const AUTH = 'AUTH'

export function auth(payload) {
  return { 
    type: AUTH,
    payload
  }
}