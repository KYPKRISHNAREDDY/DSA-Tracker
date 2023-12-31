import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
    // const originalDsaSheetLink =
    //     'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'
    const gitHubLink = 'https://github.com/KYPKRISHNAREDDY/DSA-Tracker'

    return (
        <Flex
            className={'footer'}
            bg={'footerBg'}
            w={'100vw'}
            px={4}
            py={1}
            flexGrow={'0'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            userSelect={'none'}
        >
            <Text
                fontWeight={'md'}
                fontSize={'xs'}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={'secondaryColor'}
                textAlign={'center'}
            >
                A Personal web-based progress tracker For Solving DSA Questions{' '}
                {<b>Lets Track It</b>}{' '}
            </Text>

            {/* <Link
                href={gitHubLink}
                target={'_blank'}
                _hover={{}}
                display={{ base: 'none', md: 'flex' }}
            >
                <Text
                    w={'fit-content'}
                    h={'fit-content'}
                    px={4}
                    py={1}
                    bg={'secondaryColor'}
                    borderRadius={'16px'}
                    fontWeight={'lg'}
                    fontSize={'xs'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'defaultColor'}
                >
                    This Project
                </Text>
            </Link> */}
        </Flex>
    )
}

export default Footer
