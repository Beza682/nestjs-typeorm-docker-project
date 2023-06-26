import { compare, hash, genSalt} from 'bcrypt';

export async function encodePassword(password: string): Promise<string> {
    const ROUNDS = 10
    const salt = await genSalt(ROUNDS)
    const hashedPassword = await hash(password, salt)

    return hashedPassword
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
    const passwordMatch = await compare(password, hash)

    return passwordMatch
}
