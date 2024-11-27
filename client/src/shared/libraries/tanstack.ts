
export const enum EnumQueryKeys {
    TODOS = 'todos',
    POSTS = 'posts',
}

export const queryKeys: Record<EnumQueryKeys, string> = {
    [EnumQueryKeys.TODOS]: EnumQueryKeys.TODOS,
    [EnumQueryKeys.POSTS]: EnumQueryKeys.POSTS,
}