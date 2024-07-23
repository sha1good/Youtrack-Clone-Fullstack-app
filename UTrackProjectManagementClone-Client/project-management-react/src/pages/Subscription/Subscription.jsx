import SubscriptionCard from "./SubscriptionCard";

const MonthlyPlan = [
  "Add Unlimited Project",
  "Access to live chat",
  "Add Unlimited Team Member",
  "Advance Reporting",
  "Priority Support",
  "Customization Options",
  "Integration Support",
  "Advance Security",
  "Traning and Resources",
  "Access Control",
  "Custom Workflows",
];

const AnnualPlan = [
  "Add Unlimited Project",
  "Access to live chat",
  "Add Unlimited Team Member",
  "Advance Reporting",
  "Priority Support",
  "Everything which Monthly plan has",
];

const FreePlan = [
  "Add only 3 Projects",
  "Basic Task Management",
  "Project Collaboration",
  "Basic Reporting",
  "Email Notification",
  "Basic Access Control",
];

const Subscription = () => {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard
          data={{
            planName: "Free",
            feature: FreePlan,
            subType: "FREE",
            price: 0,
            buttonName: true ? "Current Plan" : "Get Started",
            //buttonName: buttonName: subscription.userSubscription?.subType === "FREE" ? "Current Plan" : "Get Started",
          }}
        />
        <SubscriptionCard
          data={{
            planName: "Monthly Paid Plan",
            feature: MonthlyPlan,
            subType: "MONTHLY",
            price: 799,
            buttonName: true ? "Current Plan" : "Get Started",
            //buttonName: buttonName: subscription.userSubscription?.subType === "MONTHLY" ? "Current Plan" : "Get Started",
          }}
        />
        <SubscriptionCard
          data={{
            planName: "Annual Paid Plan",
            feature: AnnualPlan,
            subType: "ANNUALLY",
            price: 6711,
            buttonName: true ? "Current Plan" : "Get Started",
            //buttonName: subscription.userSubscription?.subType === "ANNUALLY" ? "Current Plan" : "Get Started",
          }}
        />
      </div>
    </div>
  );
};

export default Subscription;
