namespace KS.GenApps.Common

open System
open System.Runtime.CompilerServices

[<Extension>]
module Methods =   
  [<Extension>]   
  let IsNullOrEmpty(this : string) =
    String.IsNullOrEmpty(this)
