import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import ErrorPage from "../error-page.jsx";
import Root from "../routes/root.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ErrorPage">
                <ErrorPage/>
            </ComponentPreview>
            <ComponentPreview path="/Root">
                <Root/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews