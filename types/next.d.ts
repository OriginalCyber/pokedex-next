import { NextPage } from "next";
import React from "react";


declare type NextCustomPage = NextPage & {
    Layout?: React.FC<any>;
};