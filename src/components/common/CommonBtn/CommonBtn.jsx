import { Button } from '@mui/material'
import React from 'react'

const CommonBtn = ({ children, color, disabled, size, sx, variant }) => {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            sx={sx}
            variant={variant}
        >
            {children}
        </Button>
    )
}

export default CommonBtn