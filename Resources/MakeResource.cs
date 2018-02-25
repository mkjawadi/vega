using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace vega.Resources
{
    public class MakeResource : KeyValuePairResource
    {
        public MakeResource()
        {
            Models= new Collection<KeyValuePairResource>();
        }

        public ICollection<KeyValuePairResource> Models { get; set; }
    }
}