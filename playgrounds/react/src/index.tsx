import React from 'react';
import { createRoot } from 'react-dom/client'

import { Margin } from '@ds.t/react';
import '@ds.t/scss/lib/Margin.css'

const container =  document.getElementById("root")
const root = createRoot(container!)
root.render(<Margin all="lg" top='xxxs' left='md'>Teste</Margin>)
console.log("teste")