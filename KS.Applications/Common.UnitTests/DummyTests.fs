module KS.GenApps.Common.UnitTests.DummyTests

open global.Xunit
open FsCheck

[<Fact>]
let ``Reverse of reverse of a list is the original list``() =
  let revRevIsOrig (xs:list<int>) = List.rev(List.rev xs) = xs
  Check.QuickThrowOnFailure revRevIsOrig
