import { Application } from "../Application"
import { Governance } from "../Governance/Governance"
import { Marketplace } from "../Marketplace/Marketplace"

export class Zion extends Application{
  constructor(
    name,
    description,
    image,
    external_url
    ) {
    super(
      name,
      description,
      image,
      external_url
    )
  }
  createAccount()
  updateAccount()
  deleteAccount()
  login()
  logout()
  createZnft()
  composeZnft()
  updateZnft()
  deleteZnft()
  declareCopyright()
}