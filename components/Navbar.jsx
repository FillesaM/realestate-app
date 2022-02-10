import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer,Heading,Icon} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FaKey } from 'react-icons/fa';

const Navbar = () => {

    return (
        <Flex p='4' backgroundColor='blackAlpha.900' >
            <Box fontSize='3xl' color='white' fontWeight='bold' marginLeft='10'>
                <Link href='/' paddingLeft='2'>Realtor</Link>
            </Box>
            <Flex display={{ base: "none", md: "flex" }}>
            <Box fontSize='18px' color='white' fontWeight='bold' marginLeft='700' paddingTop='2' >
                <Link href='/' paddingLeft='2'>Home</Link>
            </Box>
             <Box fontSize='18px' color='white' fontWeight='bold' marginLeft='70' paddingTop='2'>
                <Link href='/search' paddingLeft='2'>Search</Link>
            </Box>
            <Box fontSize='18px' color='white' fontWeight='bold' marginLeft='70' paddingTop='2'>
                <Link href='/search?purpose=for-sale' paddingLeft='2'>Buy Property</Link>
            </Box>
             <Box fontSize='18p' color='white' fontWeight='bold' marginLeft='70' paddingTop='2'>
                <Link href='/search?purpose=for-rent' paddingLeft='2'>Rent Property</Link>
                </Box>
                </Flex>
            <Spacer />
            
            <Box display={{ base: "flex", md: "none" }} >
                    <Menu>
                        <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400' />
                        <MenuList>
                            <Link href='/' passHref>
                                <MenuItem icon={<FcHome />}>Home</MenuItem>
                            </Link>
                            <Link href='/search' passHref>
                                <MenuItem icon={<BsSearch />}>Search</MenuItem>
                            </Link>
                            <Link href='/search?purpose=for-sale' passHref>
                                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                            </Link>
                            <Link href='/search?purpose=for-rent' passHref>
                                <MenuItem icon={<FaKey />}>Rent Property</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
                
        </Flex>

    )
}
export default Navbar;