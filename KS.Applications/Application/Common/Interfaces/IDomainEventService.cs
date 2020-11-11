using KS.Applications.Domain.Common;
using System.Threading.Tasks;

namespace KS.Applications.Application.Common.Interfaces
{
    public interface IDomainEventService
    {
        Task Publish(DomainEvent domainEvent);
    }
}
