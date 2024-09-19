import React from 'react';

const Html = ({ body, head = "", before_body_end = "" }) => {
    return (
        <html lang="it">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://cdn.tailwindcss.com"></script>
                { head }
            </head>
            <body>
                { body }
                { before_body_end }
            </body>
        </html>
    )
  }

export default Html;