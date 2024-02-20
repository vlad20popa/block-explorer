'use client';
import ExplorerHeader from "@/layouts/ExplorerHeader";
import Blocks from "@/components/explorer/Blocks";
import React from "react";

export default function BlockExplorerLayout() {

    return (
        <>
            <ExplorerHeader/>
            <Blocks/>
        </>
    );
}