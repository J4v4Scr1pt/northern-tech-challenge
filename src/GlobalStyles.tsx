import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	&::-webkit-scrollbar {
		width: 16px;
		height: 12px;
		border-radius: 100vw;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
        margin-block: 0.3em;
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.3);
        border: 4px solid transparent;
        background-clip: padding-box;
		border-radius: 100vw;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 0, 0, 0.4);
        background-clip: padding-box;
        border: 1px solid transparent;
	}

    &::-webkit-scrollbar-thumb:active {
		background: rgba(0, 0, 0, 0.6);
        background-clip: padding-box;
        border: 1px solid transparent;
	}

    @supports (overflow-y: overlay) {
        body {
            overflow-y: overlay;
        }
    }

    * {
        font-family: "Open Sans", helvetica, arial;
        color: #4c4c4c;
        @supports (scrollbar-color: red blue) {
                scrollbar-color:rgba(0, 0, 0, 0.3) transparent;
                scrollbar-width: thin;
        }
    }

    body {
        background-color: hsl(0, 0%, 8%);
        margin: 0px; padding: 0px
    }

    html {
        box-sizing: border-box;
        margin: 0px; padding: 0px
      }
    
    *, *:before, *:after {
        box-sizing: inherit;
      }
`;

export default GlobalStyle;
