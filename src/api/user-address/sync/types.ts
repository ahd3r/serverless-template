export type Address = {
  name: string
  street: string
  city: string
  kind: 'address'
}

export type User = {
  name: string
  lastName: string
  email: string
  kind: 'user'
}

export type domainTypes = Address['kind'] | User['kind']
export type domainEntity = User | Address
