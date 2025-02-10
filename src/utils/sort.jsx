export const sortByCompletedAt = (a, b, direction) => {
    const aVal = a? 1 : 0;
    const bVal = b? 1 : 0;
    return direction === 'asc' ? aVal - bVal : bVal - aVal;
};

export const sortByPriority = (a, b, direction) => {
    const priorityMap = { "High": 3, "Medium": 2, "Low": 1 };
    const aVal = priorityMap[a];
    const bVal = priorityMap[b];
    return direction === 'asc' ? aVal - bVal : bVal - aVal;
};

export const sortByString = (a, b, direction) => {
    return direction === 'asc'? a.localeCompare(b): b.localeCompare(a);
};