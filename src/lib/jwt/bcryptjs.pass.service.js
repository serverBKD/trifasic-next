import { genSalt ,hashSync} from 'bcryptjs'

export const generatePasswordHash = async (string) => {
	const sxSalt = await genSalt(10)
	const sxhashSync = hashSync(string, sxSalt)
	return sxhashSync
}