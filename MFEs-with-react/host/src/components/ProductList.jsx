import React, { Suspense } from "react";
const TodoApp = React.lazy(()=>import('TodoAppHost/TodoApp'))



export const ProductList = () => {
    return (
        <div className="todo-list-container">
            <Suspense fallback={<div>Loading Todo App..</div>}>
                <TodoApp />
            </Suspense>
        </div>
    )
}

