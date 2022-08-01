/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgFront2 from "assets/images/rotating-card-bg-front2.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
// icons
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
function Information() {
  return (
    <MKBox component="section" py={10} my={10}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={6} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront2}
                // icon ={OpacityOutlinedIcon}
                title={
                  <>
                    Freshco
                    <br />
                   Bottled juice company
                  </>
                }
                description="Mix Fruits Pcs, Vanilla Ice-cream,  Blueberry Juice and Topping of Ice-cream, Pomegranate, Pistachio Powder and strawberry sauce. "
              />
              <RotatingCardBack
                image={bgBack}
                // height="12"
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                // icon="touch_app"
                title={
                  <>
                    Dega
                    <br />
                    Bottled Water Company
                  </>
                }
                description="Bottled at the source from the cold, water-rich, heavenly & naturally bountiful Highlands (DEGA) of Debrebirhan, Ethiopia."
              />
              <RotatingCardBack
                // image={bgBack}
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          
          {/* <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Full Documentation"
                  description="Built by developers for developers. Check the foundation and you will find
                    everything inside our documentation."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="MUI Ready"
                  description="The world's most popular react components library for building user interfaces."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Save Time & Money"
                  description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
