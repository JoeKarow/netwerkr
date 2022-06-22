import { Container, Text } from "@mantine/core"

export const JsonView = ( data ) => {
    return (
        <Container fluid >
            <Text sx={ { whiteSpace: 'pre-wrap' } }>{ JSON.stringify( data, null, 2 ) }</Text>
        </Container >
    )
}