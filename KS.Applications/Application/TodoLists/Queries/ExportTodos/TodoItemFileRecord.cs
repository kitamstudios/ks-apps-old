using KS.Applications.Application.Common.Mappings;
using KS.Applications.Domain.Entities;

namespace KS.Applications.Application.TodoLists.Queries.ExportTodos
{
    public class TodoItemRecord : IMapFrom<TodoItem>
    {
        public string Title { get; set; }

        public bool Done { get; set; }
    }
}
