import React from 'react';
import LetterButton from './buttons';
import SliderComponent from './slider';
import TogglePower from './togglePower';
import ToggleBank from './toggleBank';
import TextArea from './textAreaSoundName';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const Drum = () => {
    return (
        < Stack
            direction="row"
            justifyContent="center"
            margin={35}
            sx={{ border: '9px groove yellow', backgroundColor: 'darkgrey' }}
        >
            <Stack
                margin={3}
                //sx={{ border: '1px dashed blue', }}
                >
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Stack direction="row" spacing={6}>
                            <LetterButton letter='B' />
                            <LetterButton letter='E' />
                            <LetterButton letter='A' />
                        </Stack>
                    </Grid>
                    <Grid item xs={8}>
                        <Stack direction="row" spacing={6}>
                            <LetterButton letter='U' />
                            <LetterButton letter='T' />
                            <LetterButton letter='Y' />
                        </Stack>

                    </Grid>

                    <Grid item xs={8}>
                        <Stack direction="row" spacing={6}>
                            <LetterButton letter='L' />
                            <LetterButton letter='V' />
                            <LetterButton letter='Q' />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                margin={3}
                //sx={{ border: '1px dashed black', }}
                >
                <TogglePower />
                <TextArea soundName="heat" />
                <SliderComponent />
                <ToggleBank />
            </Stack>

        </Stack >
    )
}

export default Drum;