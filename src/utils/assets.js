export const asset = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  const clean = String(path).replace(/^\/+/, '');
  return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
};