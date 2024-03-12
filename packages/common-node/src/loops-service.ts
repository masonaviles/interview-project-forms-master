import axios, { AxiosInstance } from 'axios'
import urljoin from 'url-join'

type ContactParams = {
  email: string
  firstName: string
  lastName: string
  name: string
  userId: string
  madeCall: boolean
  subscribed: boolean
}

type UpgradeProjectParams = {
  user: { name: string; email: string }
  project: { name: string; url: string; upgradeURL: string }
}
export class LoopsService {
  axios: AxiosInstance

  constructor() {
    this.axios = axios.create()
  }

  newContactEvent(data: ContactParams) {
    return this.axios.post(this.url('contacts/create'), data)
  }

  updateContactEvent(data: ContactParams) {
    return this.axios.put(this.url('contacts/update'), data)
  }

  madeFirstCall(data: { email: string }) {
    return this.axios.post(this.url('events/send'), {
      email: data.email,
      eventName: 'madeFirstCall',
      madeCall: true,
    })
  }

  createFreeProject(data: {
    user: { name: string; email: string }
    project: { name: string; url: string; upgradeURL: string }
  }) {
    return this.transactional({
      transactionId: 'clmjazy52014yl50o2bnbra98',
      email: data.user.email,
      dataVariables: {
        name: data.user.name,
        projectName: data.project.name,
        projectLink: data.project.url,
        upgradeLink: data.project.upgradeURL,
      },
    })
  }

  createBuilder(data: {
    user: { email: string; name: string }
    project: { name: string; url: string }
  }) {
    return this.transactional({
      transactionId: 'clmjm9mvd0270ld0q3jeweqak',
      email: data.user.email,
      dataVariables: {
        name: data.user.name,
        projectName: data.project.name,
        projectLink: data.project.url,
      },
    })
  }

  nearLimitFree(data: UpgradeProjectParams) {
    return this.transactional({
      transactionalId: 'clmjaz0ku00anle0pz69p618a',
      email: data.user.email,
      dataVariables: {
        name: data.user.name,
        projectName: data.project.name,
        upgradeLink: data.project.upgradeURL,
      },
    })
  }

  nearLimitBuilder(data: UpgradeProjectParams) {
    return this.transactional({
      transactionalId: 'clmjaz9r9004jl20pah107gov',
      email: data.user.email,
      dataVariables: {
        name: data.user.name,
        projectName: data.project.name,
      },
    })
  }

  hitLimitFree(data: UpgradeProjectParams) {
    return this.transactional({
      transactionalId: 'clmjazf63007mmk0q96fj6pyy',
      email: data.user.email,
      dataVariables: {
        name: data.user.name,
        projectName: data.project.name,
        upgradeLink: data.project.upgradeURL,
      },
    })
  }

  hitLimitBuilder(data: UpgradeProjectParams) {
    return this.transactional({
      transactionalId: 'clmjazl8a00ttl80n1myrsrwx',
      email: data.user.email,
      dataVariables: {
        name: data.user.name,
        projectName: data.project.name,
      },
    })
  }

  private url(path: string) {
    return urljoin('https://app.loops.so/api/v1/', path)
  }

  private transactional(data: any) {
    return this.axios.post(this.url('transactional'), data)
  }
}
