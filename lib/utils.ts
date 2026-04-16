export const getAssetPath = (path: string) => {
  const basePath = '/landingpage-coffe';
  if (path.startsWith('http') || path.startsWith('//')) return path;
  // Ensure the path starts with a slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};
