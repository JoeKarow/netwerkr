import React from 'react';
import { Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';

const PRIMARY_COL_HEIGHT = 600;

export function ProfileGrid () {
    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

    return (
        <SimpleGrid cols={ 2 } spacing="md" breakpoints={ [ { maxWidth: 'sm', cols: 1 } ] }>
            <Skeleton height={ PRIMARY_COL_HEIGHT } radius="md" animate={ true } visible={ true }>

            </Skeleton>
            <Grid gutter="md">
                <Grid.Col>
                    <Skeleton height={ SECONDARY_COL_HEIGHT } radius="md" animate={ false } />
                </Grid.Col>
                <Grid.Col span={ 6 }>
                    <Skeleton height={ SECONDARY_COL_HEIGHT } radius="md" animate={ false } />
                </Grid.Col>
                <Grid.Col span={ 6 }>
                    <Skeleton height={ SECONDARY_COL_HEIGHT } radius="md" animate={ false } />
                </Grid.Col>
            </Grid>
        </SimpleGrid>

    );
}