//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ajax
{
    using System;
    using System.Collections.Generic;
    
    public partial class Work_History
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Work_History()
        {
            this.Positions = new HashSet<Position>();
        }
    
        public string CompanyName { get; set; }
        public int UserId { get; set; }
        public System.TimeSpan StartDate { get; set; }
        public Nullable<System.TimeSpan> EndDate { get; set; }
        public Nullable<bool> CurrentJob { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Position> Positions { get; set; }
        public virtual UserProfile UserProfile { get; set; }
    }
}
