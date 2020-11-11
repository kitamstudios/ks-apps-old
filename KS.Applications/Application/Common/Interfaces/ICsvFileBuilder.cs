using KS.Applications.Application.TodoLists.Queries.ExportTodos;
using System.Collections.Generic;

namespace KS.Applications.Application.Common.Interfaces
{
    public interface ICsvFileBuilder
    {
        byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
    }
}
