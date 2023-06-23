import { registerEnumType } from '@nestjs/graphql'

export enum JokeCategoryEnum{
    ANY = 'Any',
    MISC = 'Misc',
    PROG = 'Programming',
    DARK = 'Dark',
    PUN = 'Pun',
    SPOOKY = 'Spooky',
    CHRISTMAS = 'Christmas',
}

registerEnumType(JokeCategoryEnum, {
    name: 'JokeCategoryEnum'
})