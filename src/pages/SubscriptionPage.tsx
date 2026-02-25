import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Chip,
  Stack,
  Divider,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Check,
  ChevronDown,
  Zap,
  Shield,
  Globe,
  BarChart3,
  HelpCircle,
} from 'lucide-react';
import { usePricing, BillingCycle, PricingPlan } from '../hooks/usePricing';

const SubscriptionPage: React.FC = () => {
  const theme = useTheme();
  const { billingCycle, toggleBillingCycle, plans } = usePricing();

  const faqs = [
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. Your access will remain active until the end of your current billing period.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee for all new subscriptions. If you are not satisfied, contact our support team within the first 14 days for a full refund.',
    },
    {
      question: 'How do I change my billing cycle?',
      answer: 'You can switch between monthly and yearly billing at any time. Changes will be applied at the start of your next billing cycle.',
    },
    {
      question: 'Is there a discount for non-profits?',
      answer: 'Yes! We offer a 50% discount for registered non-profit organizations. Please contact our sales team with your documentation to apply.',
    },
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', pb: 8 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, letterSpacing: -1 }}>
          Simple, Transparent Pricing
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
          Choose the plan that best fits your business needs.
        </Typography>

        {/* Pricing Toggle */}
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, p: 0.5, bgcolor: 'action.hover', borderRadius: 3 }}>
          <ToggleButtonGroup
            value={billingCycle}
            exclusive
            onChange={toggleBillingCycle}
            aria-label="billing cycle"
            sx={{
              '& .MuiToggleButton-root': {
                border: 'none',
                borderRadius: 2,
                px: 3,
                py: 1,
                textTransform: 'none',
                fontWeight: 600,
                '&.Mui-selected': {
                  bgcolor: 'background.paper',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'background.paper',
                  },
                },
              },
            }}
          >
            <ToggleButton value="monthly">Monthly</ToggleButton>
            <ToggleButton value="yearly">
              Yearly
            </ToggleButton>
          </ToggleButtonGroup>
          <Chip 
            label="-20% Discount" 
            size="small" 
            color="success" 
            sx={{ 
              fontWeight: 700, 
              fontSize: '0.7rem',
              height: 24,
              mr: 1
            }} 
          />
        </Box>
      </Box>

      {/* Pricing Cards */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {plans.map((plan: PricingPlan) => {
          const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
          
          return (
            <Grid size={{ xs: 12, md: 4 }} key={plan.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  border: plan.popular ? '2px solid' : '1px solid',
                  borderColor: plan.popular ? 'primary.main' : 'divider',
                  boxShadow: plan.popular ? `0 20px 40px ${alpha(theme.palette.primary.main, 0.1)}` : 'none',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: plan.popular 
                      ? `0 24px 48px ${alpha(theme.palette.primary.main, 0.15)}` 
                      : '0 12px 24px rgba(0,0,0,0.05)',
                  }
                }}
              >
                {plan.popular && (
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: 16, 
                      right: 16,
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5
                    }}
                  >
                    Most Popular
                  </Box>
                )}
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{plan.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{plan.description}</Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 4 }}>
                    <Typography variant="h3" sx={{ fontWeight: 800 }}>${price}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ ml: 1 }}>/mo</Typography>
                  </Box>

                  <Stack spacing={2}>
                    {plan.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          bgcolor: feature.included ? alpha(theme.palette.success.main, 0.1) : alpha(theme.palette.text.disabled, 0.1),
                          color: feature.included ? 'success.main' : 'text.disabled'
                        }}>
                          <Check size={12} strokeWidth={3} />
                        </Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: feature.included ? 'text.primary' : 'text.disabled',
                            textDecoration: feature.included ? 'none' : 'line-through'
                          }}
                        >
                          {feature.text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
                <Box sx={{ p: 4, pt: 0 }}>
                  <Button 
                    variant={plan.popular ? 'contained' : 'outlined'} 
                    fullWidth 
                    size="large"
                    sx={{ 
                      borderRadius: 2, 
                      py: 1.5, 
                      fontWeight: 700,
                      boxShadow: plan.popular ? `0 8px 16px ${alpha(theme.palette.primary.main, 0.2)}` : 'none'
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Usage Dashboard */}
      <Card sx={{ mb: 8, border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Usage at a glance</Typography>
              <Typography variant="body2" color="text.secondary">Current billing period AI Token consumption</Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>75,000 / 100,000</Typography>
              <Typography variant="caption" color="text.secondary">Tokens used (75%)</Typography>
            </Box>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={75} 
            sx={{ 
              height: 12, 
              borderRadius: 6,
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              '& .MuiLinearProgress-bar': {
                borderRadius: 6,
                backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
              }
            }} 
          />
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {[
              { label: 'API Requests', value: '1,240', icon: <Zap size={18} /> },
              { label: 'Storage', value: '4.2 GB', icon: <Shield size={18} /> },
              { label: 'Bandwidth', value: '128 GB', icon: <Globe size={18} /> },
              { label: 'Active Sessions', value: '42', icon: <BarChart3 size={18} /> }
            ].map((item, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: 'action.hover', color: 'primary.main' }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>{item.label}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>{item.value}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box sx={{ display: 'inline-flex', p: 1.5, borderRadius: 2, bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.main', mb: 2 }}>
            <HelpCircle size={24} />
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>Frequently Asked Questions</Typography>
          <Typography variant="body1" color="text.secondary">Everything you need to know about the product and billing.</Typography>
        </Box>

        <Box>
          {faqs.map((faq, index) => (
            <Accordion 
              key={index}
              disableGutters
              elevation={0}
              sx={{ 
                bgcolor: 'transparent',
                border: 'none',
                '&:before': { display: 'none' },
                '&:hover': { bgcolor: 'action.hover' },
                borderRadius: 2,
                mb: 1,
                transition: 'background-color 0.2s ease'
              }}
            >
              <AccordionSummary
                expandIcon={<ChevronDown size={20} />}
                sx={{ 
                  px: 3,
                  py: 1,
                  '& .MuiAccordionSummary-content': {
                    my: 1
                  }
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SubscriptionPage;
