
export type TypeTodo = {
    _id: string
    title: string
    description: string
    completed: boolean
}

export const enum EnumTodoFormKeys {
    TITLE = 'title',
    DESCRIPTION = 'description',
}

export type TypeTodoFormState = {
    [EnumTodoFormKeys.TITLE]: string
    [EnumTodoFormKeys.DESCRIPTION]: string
}