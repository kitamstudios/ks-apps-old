using KS.Applications.Domain.Common;
using KS.Applications.Domain.Entities;

namespace KS.Applications.Domain.Events
{
    public class TodoItemCreatedEvent : DomainEvent
    {
        public TodoItemCreatedEvent(TodoItem item)
        {
            Item = item;
        }

        public TodoItem Item { get; }
    }
}
