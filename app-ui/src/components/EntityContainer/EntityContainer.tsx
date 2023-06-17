/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import {
  Button,
  Divider,
  Typography,
  Avatar,
  IconButton,
  SvgIcon,
  Card,
  CardContent,
  Stack,
  Skeleton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import EntityInfoTable from 'src/components/EntityInfoTable/EntityInfoTable';
import EntityForm from 'src/components/EntityForm/EntityForm';
import { EntityContainerProps } from 'src/types';

const EntityContainer1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const Content: any = styled('div')(({ theme }: any) => ({
  boxShadow: theme.customShadows['elevation']['4'].boxShadow,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const ProfileContainer: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const CardHeader1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['background']['default'],
  borderRadius: `6px 0px 0px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `56px`,
  margin: `0px`,
}));

const Content1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Header: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['h4'].fontStyle,
  fontFamily: theme.typography['Typography']['h4'].fontFamily,
  fontWeight: theme.typography['Typography']['h4'].fontWeight,
  fontSize: theme.typography['Typography']['h4'].fontSize,
  letterSpacing: theme.typography['Typography']['h4'].letterSpacing,
  lineHeight: theme.typography['Typography']['h4'].lineHeight,
  textDecoration: theme.typography['Typography']['h4'].textDecoration,
  textTransform: theme.typography['Typography']['h4'].textTransform,
  margin: `0px`,
}));

const Subheader: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Typography']['body2'].fontStyle,
  fontFamily: theme.typography['Typography']['body2'].fontFamily,
  fontWeight: theme.typography['Typography']['body2'].fontWeight,
  fontSize: theme.typography['Typography']['body2'].fontSize,
  letterSpacing: theme.typography['Typography']['body2'].letterSpacing,
  lineHeight: theme.typography['Typography']['body2'].lineHeight,
  textDecoration: theme.typography['Typography']['body2'].textDecoration,
  textTransform: theme.typography['Typography']['body2'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Button1: any = styled(Button)(({ theme }: any) => ({
  margin: `0px`,
  color: theme.palette['primary']['main'],
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `uppercase`,
}));

const DividerHorizontal: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Box1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['background']['default'],
  borderRadius: `0px 0px 0px 6px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `32px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
}));

const Frame80: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Typography1: any = styled(Typography)(({ theme }: any) => ({
  margin: `0px`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['h3'].fontStyle,
  fontFamily: theme.typography['Typography']['h3'].fontFamily,
  fontWeight: theme.typography['Typography']['h3'].fontWeight,
  fontSize: theme.typography['Typography']['h3'].fontSize,
  letterSpacing: theme.typography['Typography']['h3'].letterSpacing,
  lineHeight: theme.typography['Typography']['h3'].lineHeight,
  textDecoration: theme.typography['Typography']['h3'].textDecoration,
  textTransform: theme.typography['Typography']['h3'].textTransform,
}));

const Avatar1: any = styled(Avatar)(({ theme }: any) => ({
  margin: `32px 0px 0px 0px`,
  color: theme.palette['background']['paper-elevation-0'],
  fontStyle: theme.typography['Components']['avatar-initials'].fontStyle,
  fontFamily: theme.typography['Components']['avatar-initials'].fontFamily,
  fontWeight: theme.typography['Components']['avatar-initials'].fontWeight,
  fontSize: theme.typography['Components']['avatar-initials'].fontSize,
  letterSpacing:
    theme.typography['Components']['avatar-initials'].letterSpacing,
  lineHeight: theme.typography['Components']['avatar-initials'].lineHeight,
  textDecoration:
    theme.typography['Components']['avatar-initials'].textDecoration,
  textTransform:
    theme.typography['Components']['avatar-initials'].textTransform,
}));

const Typography2: any = styled(Typography)(({ theme }: any) => ({
  margin: `32px 0px 0px 0px`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['body1'].fontStyle,
  fontFamily: theme.typography['Typography']['body1'].fontFamily,
  fontWeight: theme.typography['Typography']['body1'].fontWeight,
  fontSize: theme.typography['Typography']['body1'].fontSize,
  letterSpacing: theme.typography['Typography']['body1'].letterSpacing,
  lineHeight: theme.typography['Typography']['body1'].lineHeight,
  textDecoration: theme.typography['Typography']['body1'].textDecoration,
  textTransform: theme.typography['Typography']['body1'].textTransform,
}));

const EntityInfoTable1: any = styled(EntityInfoTable)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
}));

const DividerVertical: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const FormContainer: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `700px`,
  margin: `0px`,
});

const CardHeader2: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['colors']['grey']['50'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `56px`,
  margin: `0px`,
}));

const AvatarWrapper: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 8px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const IconButton1: any = styled(IconButton)(({ theme }: any) => ({
  margin: `0px`,
}));

const Text: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Header1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Typography']['body1'].fontStyle,
  fontFamily: theme.typography['Typography']['body1'].fontFamily,
  fontWeight: theme.typography['Typography']['body1'].fontWeight,
  fontSize: theme.typography['Typography']['body1'].fontSize,
  letterSpacing: theme.typography['Typography']['body1'].letterSpacing,
  lineHeight: theme.typography['Typography']['body1'].lineHeight,
  textDecoration: theme.typography['Typography']['body1'].textDecoration,
  textTransform: theme.typography['Typography']['body1'].textTransform,
  margin: `0px`,
}));

const Subheader1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Typography']['body2'].fontStyle,
  fontFamily: theme.typography['Typography']['body2'].fontFamily,
  fontWeight: theme.typography['Typography']['body2'].fontWeight,
  fontSize: theme.typography['Typography']['body2'].fontSize,
  letterSpacing: theme.typography['Typography']['body2'].letterSpacing,
  lineHeight: theme.typography['Typography']['body2'].lineHeight,
  textDecoration: theme.typography['Typography']['body2'].textDecoration,
  textTransform: theme.typography['Typography']['body2'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const IconButton2: any = styled(IconButton)(({ theme }: any) => ({
  margin: `0px`,
}));

const FormEntity: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['colors']['grey']['50'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `32px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const FormContainer1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const EntityForm1: any = styled(EntityForm)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const CardContent1: any = styled(CardContent)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Card1: any = styled(Card)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const DividerHorizontal1: any = styled(Divider)(({ theme }: any) => ({
  width: `700px`,
  margin: `0px`,
}));

const FormTax: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['colors']['grey']['50'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `32px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const FormContainer2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Typography3: any = styled(Typography)(({ theme }: any) => ({
  margin: `0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Typography']['h4'].fontStyle,
  fontFamily: theme.typography['Typography']['h4'].fontFamily,
  fontWeight: theme.typography['Typography']['h4'].fontWeight,
  fontSize: theme.typography['Typography']['h4'].fontSize,
  letterSpacing: theme.typography['Typography']['h4'].letterSpacing,
  lineHeight: theme.typography['Typography']['h4'].lineHeight,
  textDecoration: theme.typography['Typography']['h4'].textDecoration,
  textTransform: theme.typography['Typography']['h4'].textTransform,
}));

const Skeleton1: any = styled(Skeleton)(({ theme }: any) => ({
  alignSelf: `stretch`,
  height: `30px`,
  margin: `16px 0px 0px 0px`,
}));

const Skeleton2: any = styled(Skeleton)(({ theme }: any) => ({
  alignSelf: `stretch`,
  height: `30px`,
  margin: `16px 0px 0px 0px`,
}));

const Skeleton3: any = styled(Skeleton)(({ theme }: any) => ({
  height: `30px`,
  width: `160px`,
  margin: `16px 0px 0px 0px`,
}));

const Stack1: any = styled(Stack)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const CardContent2: any = styled(CardContent)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Card2: any = styled(Card)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const DividerVertical1: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const InvestorContainer: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const CardHeader3: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['background']['default'],
  borderRadius: `0px 6px 0px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `56px`,
  margin: `0px`,
}));

const Content2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Header2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['h4'].fontStyle,
  fontFamily: theme.typography['Typography']['h4'].fontFamily,
  fontWeight: theme.typography['Typography']['h4'].fontWeight,
  fontSize: theme.typography['Typography']['h4'].fontSize,
  letterSpacing: theme.typography['Typography']['h4'].letterSpacing,
  lineHeight: theme.typography['Typography']['h4'].lineHeight,
  textDecoration: theme.typography['Typography']['h4'].textDecoration,
  textTransform: theme.typography['Typography']['h4'].textTransform,
  margin: `0px`,
}));

const Subheader2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Typography']['body2'].fontStyle,
  fontFamily: theme.typography['Typography']['body2'].fontFamily,
  fontWeight: theme.typography['Typography']['body2'].fontWeight,
  fontSize: theme.typography['Typography']['body2'].fontSize,
  letterSpacing: theme.typography['Typography']['body2'].letterSpacing,
  lineHeight: theme.typography['Typography']['body2'].lineHeight,
  textDecoration: theme.typography['Typography']['body2'].textDecoration,
  textTransform: theme.typography['Typography']['body2'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Button2: any = styled(Button)(({ theme }: any) => ({
  margin: `0px`,
  color: theme.palette['primary']['main'],
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `uppercase`,
}));

const DividerHorizontal2: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Box2: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['colors']['grey']['50'],
  borderRadius: `0px 0px 6px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `32px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
}));

const Button3: any = styled(Button)(({ theme }: any) => ({
  margin: `0px`,
  color: theme.palette['primary']['contrast'],
  fontStyle: theme.typography['Components']['button-medium'].fontStyle,
  fontFamily: theme.typography['Components']['button-medium'].fontFamily,
  fontWeight: theme.typography['Components']['button-medium'].fontWeight,
  fontSize: theme.typography['Components']['button-medium'].fontSize,
  letterSpacing: theme.typography['Components']['button-medium'].letterSpacing,
  lineHeight: theme.typography['Components']['button-medium'].lineHeight,
  textDecoration:
    theme.typography['Components']['button-medium'].textDecoration,
  textTransform: theme.typography['Components']['button-medium'].textTransform,
}));

function EntityContainer(props: EntityContainerProps): JSX.Element {
  return (
    <EntityContainer1 className={props.className}>
      <Content>
        <ProfileContainer>
          <CardHeader1>
            <Content1>
              <Header>{`Entity`}</Header>
              {false && <Subheader>{`{Subheader}`}</Subheader>}
            </Content1>
            <Button1
              size={'small'}
              color={'primary'}
              disabled={false}
              variant={'text'}
            >
              {'Edit'}
            </Button1>
          </CardHeader1>
          <DividerHorizontal orientation="horizontal" />
          <Box1>
            <Frame80>
              <Typography1 variant={'body1'} gutterBottom={false}>
                {`{AccountNameValue}`}
              </Typography1>
              <Avatar1 sx={{ width: 40, height: 40 }} variant={'circular'}>
                {'OP'}
              </Avatar1>
              <Typography2 variant={'body1'} gutterBottom={false}>
                {`{Value}`}
              </Typography2>
            </Frame80>
            <EntityInfoTable1 />
          </Box1>
        </ProfileContainer>
        <DividerVertical orientation="vertical" />
        <FormContainer>
          <CardHeader2>
            <AvatarWrapper>
              <IconButton1 size={'small'} color={'default'} disabled={false}>
                <SvgIcon
                  component={CloseIcon}
                  htmlColor={`rgba(0, 0, 0, 0.56)`}
                ></SvgIcon>
              </IconButton1>
            </AvatarWrapper>
            <Text>
              <Header1>{`Add Entity`}</Header1>
              {false && <Subheader1>{`{Subheader}`}</Subheader1>}
            </Text>
            {false && (
              <IconButton2 size={'medium'} color={'default'} disabled={false}>
                <SvgIcon
                  component={StarIcon}
                  htmlColor={`rgba(0, 0, 0, 0.56)`}
                ></SvgIcon>
              </IconButton2>
            )}
          </CardHeader2>
          <FormEntity>
            <FormContainer1>
              <Card1>
                <CardContent1>
                  <EntityForm1 />
                </CardContent1>
              </Card1>
            </FormContainer1>
          </FormEntity>
          <DividerHorizontal1 orientation="horizontal" />
          <FormTax>
            <FormContainer2>
              <Card2>
                <CardContent2>
                  <Stack1 direction={'column'} spacing={0}>
                    <Typography3 variant={'body1'} gutterBottom={false}>
                      {'Tax'}
                    </Typography3>
                    <Skeleton1 variant={'text'} width={604} height={30} />
                    <Skeleton2 variant={'text'} width={604} height={30} />
                    <Skeleton3 variant={'text'} width={160} height={30} />
                  </Stack1>
                </CardContent2>
              </Card2>
            </FormContainer2>
          </FormTax>
        </FormContainer>
        <DividerVertical1 orientation="vertical" />
        <InvestorContainer>
          <CardHeader3>
            <Content2>
              <Header2>{`Individual Investors`}</Header2>
              {false && <Subheader2>{`{Subheader}`}</Subheader2>}
            </Content2>
            {false && (
              <Button2
                size={'small'}
                color={'primary'}
                disabled={false}
                variant={'text'}
              >
                {'Edit'}
              </Button2>
            )}
          </CardHeader3>
          <DividerHorizontal2 orientation="horizontal" />
          <Box2>
            <Button3
              size={'medium'}
              color={'primary'}
              disabled={false}
              variant={'contained'}
              endIcon={
                <SvgIcon
                  component={AddIcon}
                  htmlColor={`rgba(255, 255, 255, 1)`}
                ></SvgIcon>
              }
            >
              {'Add Individual'}
            </Button3>
          </Box2>
        </InvestorContainer>
      </Content>
    </EntityContainer1>
  );
}

export default EntityContainer;
