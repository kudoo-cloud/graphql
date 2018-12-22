// gql services
export {
  default as GraphQLRequest,
  AccountService,
  InvoiceHookupsService,
  InvoicesService,
  TimesheetEntriesService,
  TimesheetsService
} from "./services";

// hocs
export {
  withService,
  withServices,
  withCreateService,
  withUpdateService,
  withDeleteService
} from "./hoc/service";

export {
  withCustomer,
  withCustomers,
  withCreateCustomer,
  withUpdateCustomer,
  withDeleteCustomer
} from "./hoc/customer";

export {
  withProject,
  withProjects,
  withCreateProject,
  withUpdateProject,
  withDeleteProject
} from "./hoc/project";

export {
  withTimeSheet,
  withTimeSheets,
  withCreateTimeSheet,
  withUpdateTimeSheet,
  withDeleteTimeSheet,
  withTimeSheetApprove,
  withTimeSheetNotify
} from "./hoc/timeSheet";

export { withDeleteAttachment } from "./hoc/attachment";
