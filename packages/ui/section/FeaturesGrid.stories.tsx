import React from "react";
import { FeaturesGrid } from "./FeaturesGrid";
import { featureArgs } from '../mockdata/featuresGrid'
export default {
    title: 'Features Grid',
    component: FeaturesGrid,
}



export const Usage = () => <FeaturesGrid {...featureArgs} />