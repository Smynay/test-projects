import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';

const customStyle = {
  textRed: {
    color: red[500],
  },
};

export default function Page({ apiResponse }) {
  return (
    <HelloAuxillary color={customStyle.textRed}>
      <p>I'm text from a component</p>
      <p>{apiResponse}</p>
    </HelloAuxillary>
  );
}

Page.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return null;
  }

  const response = await fetch(`http://localhost:3000/api/hello`);
  const result = await response.json();

  return {
    apiResponse: result.message,
  };
};

function HelloAuxillary({ children, color }) {
  return (
    <>
      <h1 style={color}>Hello World!</h1>
      <Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}
