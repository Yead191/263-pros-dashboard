export const formatPathName = (slug?: string) => {
    if (!slug) return '';
    return slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export const isIdSegment = (str: string) => /^[a-f\d]{24}$/i.test(str) || /^\d+$/.test(str);

export const getFormattedPathFromPathname = (pathname: string) => {
    const pathSegments = pathname.split('/').filter(Boolean);
    if (!pathSegments.length) return 'Dashboard';

    let targetSlug = pathSegments[pathSegments.length - 1];

    if (isIdSegment(targetSlug)) {
        targetSlug = pathSegments[pathSegments.length - 2] || '';
    }

    return formatPathName(targetSlug);
};
