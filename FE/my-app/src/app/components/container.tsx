import * as React from 'react';
export default function Container({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>{children}</div>
    )
}