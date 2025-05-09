/**
 * Утилита для определения операционной системы пользователя
 */

export type OSType = 'Windows' | 'MacOS' | 'Linux' | 'Unknown';

export function detectOS(): OSType {
  if (typeof window === 'undefined') {
    return 'Unknown';
  }

  const userAgent = window.navigator.userAgent;
  
  if (userAgent.indexOf('Windows') !== -1) {
    return 'Windows';
  }
  
  if (userAgent.indexOf('Mac') !== -1) {
    return 'MacOS';
  }
  
  if (userAgent.indexOf('Linux') !== -1 || userAgent.indexOf('X11') !== -1) {
    return 'Linux';
  }
  
  return 'Unknown';
}