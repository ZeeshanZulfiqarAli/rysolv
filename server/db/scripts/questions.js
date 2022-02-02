const { singleQuery } = require('../baseQueries');

// Generate initial list of questions
const questions = [
  // user hiring
  // experience
  {
    id: '4bef1f37-f09b-4515-a483-047faa0758cd',
    category: 'hiring',
    created_date: new Date(),
    priority: 3,
    question_key: 'experience',
    question_text: 'How many years of experience do you have?',
    required: true,
    response_limit: 1,
    subtext: 'This can include educational and professional.',
  },
  // is_active
  {
    id: '71401a1a-54bc-4816-a6b1-2e2679b57b4b',
    category: 'hiring',
    created_date: new Date(),
    priority: 2,
    question_key: 'is_active',
    question_text: 'Are you actively looking for work?',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // preferred location
  {
    id: '29a29e9c-798e-4dd1-a8a3-c9029e5b9020',
    category: 'hiring',
    created_date: new Date(),
    priority: 4,
    question_key: 'preferred_location',
    question_text: 'Where are you located?',
    required: true,
    response_limit: 1,
    subtext: 'All positions are remote.',
  },
  // skills
  {
    id: '7d62997d-16a7-43aa-a8af-3120cfb95b28',
    category: 'hiring',
    created_date: new Date(),
    priority: 7,
    question_key: 'skills',
    question_text: 'What are your strongest skills?',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // resume
  {
    id: 'dcf6d0db-b443-48e7-a637-c1679590d184',
    category: 'hiring',
    created_date: new Date(),
    priority: 11,
    question_key: 'resume',
    question_text: 'Upload your resume.',
    required: false,
    response_limit: 1,
    subtext: 'Optional.',
  },
  // role
  {
    id: 'eb292e4a-96f8-444e-953c-f29f726abd6e',
    category: 'hiring',
    created_date: new Date(),
    priority: 8,
    question_key: 'desired_role',
    question_text: 'What is your desired role?',
    required: true,
    response_limit: 3,
    subtext: 'Select up to 3 roles.',
  },
  // target salary
  {
    id: '32eee9df-e3f8-4288-9671-d69981c6554d',
    category: 'hiring',
    created_date: new Date(),
    priority: 10,
    question_key: 'target_salary',
    question_text: 'What is your target salary?',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // timezone
  {
    id: '6f3a3385-c5be-4908-bb2c-b35dbed12947',
    category: 'hiring',
    created_date: new Date(),
    priority: 5,
    question_key: 'timezone',
    question_text: 'What timezones would you like to work in?',
    required: true,
    response_limit: 1,
    subtext: 'Range is measured from your current location.',
  },
  // type
  {
    id: '8582c14b-70ac-4ca8-8a4d-fa37cc9bec55',
    category: 'hiring',
    created_date: new Date(),
    priority: 9,
    question_key: 'type',
    question_text: 'What type of position are you looking for?',
    required: true,
    response_limit: 2,
    subtext: 'Select as many as apply.',
  },
  // us citizen
  {
    id: 'a1c3ce83-14fc-405f-9888-3fa20d5acd72',
    category: 'hiring',
    created_date: new Date(),
    priority: 1,
    question_key: 'us_citizen',
    question_text: 'Are you a US citizen?',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // ****************  company_position  ****************
  // description
  {
    id: '34cc19c1-38e3-43b4-b0e7-5fac04bedec4',
    category: 'company_position',
    created_date: new Date(),
    priority: 8,
    question_key: 'description',
    question_text: 'Job description',
    required: false,
    response_limit: 1,
    subtext: null,
  },
  // experience
  {
    id: '5c7f171e-aecb-42e1-aad3-6f4f816e3e5b',
    category: 'company_position',
    created_date: new Date(),
    priority: 10,
    question_key: 'experience',
    question_text: 'Experience',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // interview_process
  {
    id: '78d4cff7-4ae0-456e-9450-89c2f4fe4a58',
    category: 'company_position',
    created_date: new Date(),
    priority: 7,
    question_key: 'interview_process',
    question_text: 'Interview process',
    required: true,
    response_limit: 1,
    subtext:
      'Describe your typical interview process (i.e. screening call, take home assignment, final interview).',
  },
  // is_active
  {
    id: 'd16765b2-8fd0-4fc7-80d2-b3c511338240',
    category: 'company_position',
    created_date: new Date(),
    priority: 11,
    question_key: 'is_active',
    question_text: 'Open',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // location
  {
    id: 'a25c9f54-b436-415e-adc5-72d6c8e5b595',
    category: 'company_position',
    created_date: new Date(),
    priority: 5,
    question_key: 'location',
    question_text: 'Location',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // post_to_job_board
  {
    id: '0f07d534-b338-4bf7-8d66-9b78b006e7fb',
    category: 'company_position',
    created_date: new Date(),
    priority: 1,
    question_key: 'post_to_job_board',
    question_text: 'Post to job board',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // role
  {
    id: 'c762dd74-eb92-4830-9f2a-31894a1e33c7',
    category: 'company_position',
    created_date: new Date(),
    priority: 3,
    question_key: 'role',
    question_text: 'Position role',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // salary
  {
    id: 'c69a9f4b-d188-4c2f-9454-939d5483e905',
    category: 'company_position',
    created_date: new Date(),
    priority: 12,
    question_key: 'salary',
    question_text: 'Maximum salary',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // skills
  {
    id: '3a9bf308-d093-470f-ae48-1cc901772605',
    category: 'company_position',
    created_date: new Date(),
    priority: 9,
    question_key: 'skills',
    question_text: 'Skills',
    required: true,
    response_limit: 1,
    subtext:
      'Select the top five frameworks/languages that you require an engineer to know.',
  },
  // timezone
  {
    id: '282b9bd0-bb71-4926-8360-b46041a159d3',
    category: 'company_position',
    created_date: new Date(),
    priority: 6,
    question_key: 'timezone',
    question_text: 'Timezone',
    required: true,
    response_limit: 1,
    subtext: 'Select your preferred timezone range for candidates.',
  },
  // title
  {
    id: '68fb1f89-b92f-4f3a-9016-bdd1810f38c5',
    category: 'company_position',
    created_date: new Date(),
    priority: 2,
    question_key: 'title',
    question_text: 'Position title',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // type
  {
    id: '0bfa14b6-283d-4113-ab78-3fc21e21bcda',
    category: 'company_position',
    created_date: new Date(),
    priority: 4,
    question_key: 'type',
    question_text: 'Position type',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // ****************  company  *****************
  // description
  {
    id: '97e4b49d-b178-48ce-865f-c707ef48c0a5',
    category: 'company',
    created_date: new Date(),
    priority: 6,
    question_key: 'description',
    question_text: 'Description',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // location
  {
    id: '8b2245ce-709b-4e59-ac31-8a4af3359b89',
    category: 'company',
    created_date: new Date(),
    priority: 4,
    question_key: 'location',
    question_text: 'Location',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // logo
  {
    id: '7865a89d-4621-4c70-83ef-b4431123b95e',
    category: 'company',
    created_date: new Date(),
    priority: 1,
    question_key: 'logo',
    question_text: 'Company logo',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // name
  {
    id: '6fb3d210-6120-4fa1-8771-87d5a7172342',
    category: 'company',
    created_date: new Date(),
    priority: 2,
    question_key: 'name',
    question_text: 'Company name',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // size
  {
    id: 'e83bb9d4-0ef0-490c-8a09-e25a91d6d2ab',
    category: 'company',
    created_date: new Date(),
    priority: 5,
    question_key: 'size',
    question_text: 'Company size',
    required: true,
    response_limit: 1,
    subtext: null,
  },
  // website
  {
    id: 'c114925b-d250-456b-9745-98db88274670',
    category: 'company',
    created_date: new Date(),
    priority: 3,
    question_key: 'website',
    question_text: 'Company website',
    required: true,
    response_limit: 1,
    subtext: null,
  },
];

const responses = [
  // hiring
  // experience
  {
    id: '89c1a788-7eb0-4293-a06d-e67c022f8054',
    created_date: new Date(),
    priority: 1,
    question_id: '4bef1f37-f09b-4515-a483-047faa0758cd',
    response_key: '0',
    value: 'Less than 1 year',
  },
  {
    id: 'a37ee7fc-8101-4bb4-ab97-88f80d3924ad',
    created_date: new Date(),
    priority: 2,
    question_id: '4bef1f37-f09b-4515-a483-047faa0758cd',
    response_key: '1',
    value: '1 to 2 years',
  },
  {
    id: '80ae4b39-ee0c-4aa7-986f-79e196ab51f3',
    created_date: new Date(),
    priority: 3,
    question_id: '4bef1f37-f09b-4515-a483-047faa0758cd',
    response_key: '2',
    value: '2 to 5 years',
  },
  {
    id: '12630854-e30e-400d-8697-f23a61fc6792',
    created_date: new Date(),
    priority: 4,
    question_id: '4bef1f37-f09b-4515-a483-047faa0758cd',
    response_key: '5',
    value: 'More than 5 years',
  },
  // is_active
  {
    id: '2abcd529-6fb2-40c3-8969-d7990568b95d',
    created_date: new Date(),
    priority: 2,
    question_id: '71401a1a-54bc-4816-a6b1-2e2679b57b4b',
    response_key: 'no_is_active',
    value: 'No',
  },
  {
    id: '0c553a85-d783-4184-8453-fb8e99a659a7',
    created_date: new Date(),
    priority: 1,
    question_id: '71401a1a-54bc-4816-a6b1-2e2679b57b4b',
    response_key: 'yes_is_active',
    value: 'Yes',
  },
  // preferred locations
  {
    id: '399d5ac5-740c-419d-9e96-34e2c83ddd19',
    created_date: new Date(),
    priority: 1,
    question_id: '29a29e9c-798e-4dd1-a8a3-c9029e5b9020',
    response_key: 'preferred_locations',
    value: '',
  },
  // resume
  {
    id: 'f831f54f-d964-411c-abb1-68137b705aa0',
    created_date: new Date(),
    priority: 1,
    question_id: 'dcf6d0db-b443-48e7-a637-c1679590d184',
    response_key: 'resume',
    value: '',
  },
  // skills
  {
    id: '779a409f-d46f-412e-ba0c-dc7e738d7eab',
    created_date: new Date(),
    priority: 1,
    question_id: '7d62997d-16a7-43aa-a8af-3120cfb95b28',
    response_key: 'skills',
    value: '',
  },
  // specialty
  {
    id: '1f7cdcee-33ae-4c21-8269-e76566a98f58',
    created_date: new Date(),
    priority: 1,
    question_id: 'eb292e4a-96f8-444e-953c-f29f726abd6e',
    response_key: 'front_end',
    value: 'Front End',
  },
  {
    id: '367ca730-9f5f-4890-b276-d989767fa965',
    created_date: new Date(),
    priority: 2,
    question_id: 'eb292e4a-96f8-444e-953c-f29f726abd6e',
    response_key: 'back_end',
    value: 'Back End',
  },
  {
    id: '39bfff94-7dbc-437f-b032-00c802cdfb9a',
    created_date: new Date(),
    priority: 3,
    question_id: 'eb292e4a-96f8-444e-953c-f29f726abd6e',
    response_key: 'android',
    value: 'Android',
  },
  {
    id: 'be8f18ee-c6bd-4a39-ac84-22bed46b42fe',
    created_date: new Date(),
    priority: 4,
    question_id: 'eb292e4a-96f8-444e-953c-f29f726abd6e',
    response_key: 'ios',
    value: 'iOS',
  },
  {
    id: '9920364c-f718-48f6-a260-98a8aa8c82de',
    created_date: new Date(),
    priority: 5,
    question_id: 'eb292e4a-96f8-444e-953c-f29f726abd6e',
    response_key: 'devops',
    value: 'Devops',
  },
  {
    id: 'a971f55c-19d6-4e3d-b56d-91c983d8996c',
    created_date: new Date(),
    priority: 6,
    question_id: 'eb292e4a-96f8-444e-953c-f29f726abd6e',
    response_key: 'machine_learning',
    value: 'Machine Learning',
  },
  {
    id: 'b6925870-a63a-4e90-8edd-83ed84d325dd',
    created_date: new Date(),
    priority: 7,
    question_id: 'eb292e4a-96f8-444e-953c-f29f726abd6e',
    response_key: 'firmware',
    value: 'Embedded/Firmware',
  },
  {
    id: '25977afb-930e-44c4-8361-6db8baab4dbc',
    created_date: new Date(),
    priority: 8,
    question_id: 'eb292e4a-96f8-444e-953c-f29f726abd6e',
    response_key: 'generalist',
    value: 'Generalist',
  },
  // target salary
  {
    id: '8e79d387-a15a-4b6b-af4b-33ff17e7d892',
    created_date: new Date(),
    priority: 1,
    question_id: '32eee9df-e3f8-4288-9671-d69981c6554d',
    response_key: '75',
    value: '$75,000 +',
  },
  {
    id: 'ef9a6743-9711-4e73-9d79-364c76ba374d',
    created_date: new Date(),
    priority: 2,
    question_id: '32eee9df-e3f8-4288-9671-d69981c6554d',
    response_key: '100',
    value: '$100,000 +',
  },
  {
    id: '2fc18a45-e807-49cd-9003-3bf0912a90c8',
    created_date: new Date(),
    priority: 3,
    question_id: '32eee9df-e3f8-4288-9671-d69981c6554d',
    response_key: '125',
    value: '$125,000 +',
  },
  {
    id: '4e1d1560-82bd-4fe2-b7c9-37be865534e3',
    created_date: new Date(),
    priority: 4,
    question_id: '32eee9df-e3f8-4288-9671-d69981c6554d',
    response_key: '150',
    value: '$150,000 +',
  },
  {
    id: 'dd7a67a7-54df-491a-9a9b-a980b27b9f65',
    created_date: new Date(),
    priority: 5,
    question_id: '32eee9df-e3f8-4288-9671-d69981c6554d',
    response_key: '175',
    value: '$175,000 +',
  },
  {
    created_date: new Date(),
    id: '10d0c56c-b652-41cc-9beb-bbd6733f28cf',
    priority: 6,
    question_id: '32eee9df-e3f8-4288-9671-d69981c6554d',
    response_key: '200',
    value: '$200,000 +',
  },
  // timezone
  {
    id: '9a30fdef-fdac-4f0f-b878-a0c905407779',
    created_date: new Date(),
    priority: 1,
    question_id: '6f3a3385-c5be-4908-bb2c-b35dbed12947',
    response_key: '1',
    value: '+/- 1 hours',
  },
  {
    id: '0f49a4a1-4ce2-4a7a-a3f1-8c45f22342dc',
    created_date: new Date(),
    priority: 2,
    question_id: '6f3a3385-c5be-4908-bb2c-b35dbed12947',
    response_key: '2',
    value: '+/- 2 hours',
  },
  {
    id: 'fc438b2e-4c65-4999-b436-5dac12df0078',
    created_date: new Date(),
    priority: 3,
    question_id: '6f3a3385-c5be-4908-bb2c-b35dbed12947',
    response_key: '3',
    value: '+/- 3 hours',
  },
  {
    id: '748768f5-088d-4020-8f65-4fe82b5ce58d',
    created_date: new Date(),
    priority: 4,
    question_id: '6f3a3385-c5be-4908-bb2c-b35dbed12947',
    response_key: '4',
    value: '+/- 4 hours',
  },
  {
    id: 'b6766b86-2bc5-4125-bc58-b3157626c3cc',
    created_date: new Date(),
    priority: 5,
    question_id: '6f3a3385-c5be-4908-bb2c-b35dbed12947',
    response_key: '5',
    value: '+/- 5 hours',
  },
  {
    id: '9026feae-7e44-4b5e-b083-92f1e4070e91',
    created_date: new Date(),
    priority: 6,
    question_id: '6f3a3385-c5be-4908-bb2c-b35dbed12947',
    response_key: '6',
    value: '+/- 6 hours',
  },
  {
    id: '172d0da0-6941-4aff-8914-818b831a2ae2',
    created_date: new Date(),
    priority: 7,
    question_id: '6f3a3385-c5be-4908-bb2c-b35dbed12947',
    response_key: '7',
    value: '+/- 7 hours',
  },
  {
    id: 'cc9be7f8-38c8-40e8-9c90-766865e0e613',
    created_date: new Date(),
    priority: 8,
    question_id: '6f3a3385-c5be-4908-bb2c-b35dbed12947',
    response_key: '8',
    value: '+/- 8 hours',
  },
  {
    id: 'e8777003-0bac-4528-b4b5-d1ea72ef5f65',
    created_date: new Date(),
    priority: 9,
    question_id: '6f3a3385-c5be-4908-bb2c-b35dbed12947',
    response_key: '12',
    value: 'Any timezone',
  },
  // type
  {
    id: 'efecc1aa-8ef0-4cec-9bf8-5da2e89da9d9',
    created_date: new Date(),
    priority: 1,
    question_id: '8582c14b-70ac-4ca8-8a4d-fa37cc9bec55',
    response_key: 'full_time',
    value: 'Full-Time',
  },
  {
    id: '6d240be6-b0f5-4eb4-a036-555d183e1f11',
    created_date: new Date(),
    priority: 2,
    question_id: '8582c14b-70ac-4ca8-8a4d-fa37cc9bec55',
    response_key: 'contractor',
    value: 'Contractor',
  },
  // us citizen
  {
    id: '8d9d7dfc-1487-4f4a-9cee-edb9836e0d06',
    created_date: new Date(),
    priority: 1,
    question_id: 'a1c3ce83-14fc-405f-9888-3fa20d5acd72',
    response_key: 'yes_us_citizen',
    value: 'Yes',
  },
  {
    id: '8d342d18-d93c-4f9f-9b19-9fd98038a5c4',
    created_date: new Date(),
    priority: 2,
    question_id: 'a1c3ce83-14fc-405f-9888-3fa20d5acd72',
    response_key: 'no_us_citizen',
    value: 'No',
  },
  // company_position
  // description
  {
    id: '50b4d7cb-d9b9-459c-a01d-fc9475ddb149',
    created_date: new Date(),
    priority: 1,
    question_id: '34cc19c1-38e3-43b4-b0e7-5fac04bedec4',
    response_key: 'position_description',
    value: '',
  },
  // experience
  {
    id: 'a2edf732-4d73-4014-8c29-9f4f8dc39538',
    created_date: new Date(),
    priority: 1,
    question_id: '5c7f171e-aecb-42e1-aad3-6f4f816e3e5b',
    response_key: 'junior_experience',
    value: 'Junior',
  },
  {
    id: 'a3fcab14-5fb7-46c4-8377-c1c1b5330838',
    created_date: new Date(),
    priority: 2,
    question_id: '5c7f171e-aecb-42e1-aad3-6f4f816e3e5b',
    response_key: 'midlevel_experience',
    value: 'Mid-Level',
  },
  {
    id: '97847136-fc95-45cb-995f-e9e36a5e04f6',
    created_date: new Date(),
    priority: 3,
    question_id: '5c7f171e-aecb-42e1-aad3-6f4f816e3e5b',
    response_key: 'senior_experience',
    value: 'Senior',
  },
  // interview_process
  {
    id: 'cd27788e-10af-4c95-81db-3d9a53295f59',
    created_date: new Date(),
    priority: 1,
    question_id: '78d4cff7-4ae0-456e-9450-89c2f4fe4a58',
    response_key: 'interview_process',
    value: [],
  },
  // is_active
  {
    id: '6d664be8-8284-466a-82fb-5e5214a5763b',
    created_date: new Date(),
    priority: 2,
    question_id: 'd16765b2-8fd0-4fc7-80d2-b3c511338240',
    response_key: 'no_is_active',
    value: 'No',
  },
  {
    id: '2b585205-0224-46a6-bc97-90282797f3b7',
    created_date: new Date(),
    priority: 1,
    question_id: 'd16765b2-8fd0-4fc7-80d2-b3c511338240',
    response_key: 'yes_is_active',
    value: 'Yes',
  },
  // location
  {
    id: '88ae251b-bfe9-4397-998f-1a7b3c846fcf',
    created_date: new Date(),
    priority: 1,
    question_id: 'a25c9f54-b436-415e-adc5-72d6c8e5b595',
    response_key: 'location',
    value: '',
  },
  // post_to_job_board
  {
    id: '70a94648-6f75-4041-97b0-58edb9011787',
    created_date: new Date(),
    priority: 2,
    question_id: '0f07d534-b338-4bf7-8d66-9b78b006e7fb',
    response_key: 'no_post_to_job_board',
    value: 'No',
  },
  {
    id: '4b329bc5-a696-43c6-ba69-d87bb3beffa3',
    created_date: new Date(),
    priority: 1,
    question_id: '0f07d534-b338-4bf7-8d66-9b78b006e7fb',
    response_key: 'yes_post_to_job_board',
    value: 'Yes',
  },
  // role
  {
    id: '77e13dde-278a-4348-81c5-4a7b419bb49d',
    created_date: new Date(),
    priority: 1,
    question_id: 'c762dd74-eb92-4830-9f2a-31894a1e33c7',
    response_key: 'front_end',
    value: 'Front End',
  },
  {
    id: '721b1471-fb81-437b-8563-3950819d46aa',
    created_date: new Date(),
    priority: 1,
    question_id: 'c762dd74-eb92-4830-9f2a-31894a1e33c7',
    response_key: 'back_end',
    value: 'Back End',
  },
  {
    id: '1856edd4-f2c4-4172-b15b-9c00f2de439c',
    created_date: new Date(),
    priority: 2,
    question_id: 'c762dd74-eb92-4830-9f2a-31894a1e33c7',
    response_key: 'android',
    value: 'Android',
  },
  {
    id: '4790677a-301e-4d0f-88f0-6e743ae99f22',
    created_date: new Date(),
    priority: 3,
    question_id: 'c762dd74-eb92-4830-9f2a-31894a1e33c7',
    response_key: 'ios',
    value: 'iOS',
  },
  {
    id: '2694f6aa-6206-407c-8bab-69fcf0cdaffa',
    created_date: new Date(),
    priority: 4,
    question_id: 'c762dd74-eb92-4830-9f2a-31894a1e33c7',
    response_key: 'devops',
    value: 'Devops',
  },
  {
    id: 'edbb7151-fbb8-40e4-a141-441b3c3a4ed4',
    created_date: new Date(),
    priority: 5,
    question_id: 'c762dd74-eb92-4830-9f2a-31894a1e33c7',
    response_key: 'machine_learning',
    value: 'Machine Learning',
  },
  {
    id: '647e2d48-c8d7-4882-945b-4621e6817ab4',
    created_date: new Date(),
    priority: 6,
    question_id: 'c762dd74-eb92-4830-9f2a-31894a1e33c7',
    response_key: 'firmware',
    value: 'Embedded/Firmware',
  },
  {
    id: 'b603100e-1d6a-48aa-bf9e-3ed5692f3c95',
    created_date: new Date(),
    priority: 7,
    question_id: 'c762dd74-eb92-4830-9f2a-31894a1e33c7',
    response_key: 'generalist',
    value: 'Generalist',
  },
  // salary
  {
    id: '4cde7a95-2599-4e57-988c-9ad70e9b3344',
    created_date: new Date(),
    priority: 1,
    question_id: 'c69a9f4b-d188-4c2f-9454-939d5483e905',
    response_key: '75',
    value: '$75,000',
  },
  {
    id: 'd475580e-8597-4c56-a6ad-82a632cb17da',
    created_date: new Date(),
    priority: 2,
    question_id: 'c69a9f4b-d188-4c2f-9454-939d5483e905',
    response_key: '100',
    value: '$100,000',
  },
  {
    id: '3bd4e819-32d7-4467-b9d9-30b9d5630e0c',
    created_date: new Date(),
    priority: 3,
    question_id: 'c69a9f4b-d188-4c2f-9454-939d5483e905',
    response_key: '125',
    value: '$125,000',
  },
  {
    id: '03ac0f94-c87e-4c09-b47e-a0c8db83d8da',
    created_date: new Date(),
    priority: 4,
    question_id: 'c69a9f4b-d188-4c2f-9454-939d5483e905',
    response_key: '150',
    value: '$150,000',
  },
  {
    id: 'dec059ac-40c3-4e3b-9ed5-e0c43a2b7afb',
    created_date: new Date(),
    priority: 5,
    question_id: 'c69a9f4b-d188-4c2f-9454-939d5483e905',
    response_key: '175',
    value: '$175,000',
  },
  {
    id: 'fed87f96-32ff-4fce-a3b2-e35351f643fd',
    created_date: new Date(),
    priority: 6,
    question_id: 'c69a9f4b-d188-4c2f-9454-939d5483e905',
    response_key: '200',
    value: '$200,000',
  },
  // skills
  {
    id: '2f33245f-fd9e-48b6-ab0a-4abdc7154517',
    created_date: new Date(),
    priority: 1,
    question_id: '3a9bf308-d093-470f-ae48-1cc901772605',
    response_key: 'skills',
    value: '',
  },
  // timezone
  {
    id: 'f9dfe088-8951-4958-93ff-bbe5fcdfc69a',
    created_date: new Date(),
    priority: 1,
    question_id: '282b9bd0-bb71-4926-8360-b46041a159d3',
    response_key: '1',
    value: '+/- 1 hours',
  },
  {
    id: '13f8a20f-a2f6-4582-9f0e-895772cc0bf8',
    created_date: new Date(),
    priority: 2,
    question_id: '282b9bd0-bb71-4926-8360-b46041a159d3',
    response_key: '2',
    value: '+/- 2 hours',
  },
  {
    id: 'cd166e8e-66b6-405d-8c8f-f29512bf5c81',
    created_date: new Date(),
    priority: 3,
    question_id: '282b9bd0-bb71-4926-8360-b46041a159d3',
    response_key: '3',
    value: '+/- 3 hours',
  },
  {
    id: '21debded-6814-4c0c-9dee-9c0e99d28163',
    created_date: new Date(),
    priority: 4,
    question_id: '282b9bd0-bb71-4926-8360-b46041a159d3',
    response_key: '4',
    value: '+/- 4 hours',
  },
  {
    id: '46808014-d054-454a-ba84-39a2edac770a',
    created_date: new Date(),
    priority: 5,
    question_id: '282b9bd0-bb71-4926-8360-b46041a159d3',
    response_key: '5',
    value: '+/- 5 hours',
  },
  {
    id: '82459c0b-6d69-4953-8447-3bd4a8ab1c77',
    created_date: new Date(),
    priority: 6,
    question_id: '282b9bd0-bb71-4926-8360-b46041a159d3',
    response_key: '6',
    value: '+/- 6 hours',
  },
  {
    id: '8a3e42ef-8ef9-4119-9041-765e3edda9cc',
    created_date: new Date(),
    priority: 7,
    question_id: '282b9bd0-bb71-4926-8360-b46041a159d3',
    response_key: '7',
    value: '+/- 7 hours',
  },
  {
    id: '74700c0e-57e9-4a1a-b0a2-1a297dd1d60d',
    created_date: new Date(),
    priority: 8,
    question_id: '282b9bd0-bb71-4926-8360-b46041a159d3',
    response_key: '8',
    value: '+/- 8 hours',
  },
  {
    id: '75535d37-d56b-48cc-ae06-a55c23699d3e',
    created_date: new Date(),
    priority: 9,
    question_id: '282b9bd0-bb71-4926-8360-b46041a159d3',
    response_key: '12',
    value: 'Any timezone',
  },
  // title
  {
    id: '9652e19d-43f5-4445-86db-572c88c6d485',
    created_date: new Date(),
    priority: 1,
    question_id: '68fb1f89-b92f-4f3a-9016-bdd1810f38c5',
    response_key: 'title',
    value: '',
  },
  // type
  {
    id: 'e24d4938-c66e-4824-b268-3258ed545fd9',
    created_date: new Date(),
    priority: 1,
    question_id: '0bfa14b6-283d-4113-ab78-3fc21e21bcda',
    response_key: 'contractor',
    value: 'Contractor',
  },
  {
    id: 'a103a91e-3ef6-412f-9dc4-599e491179a1',
    created_date: new Date(),
    priority: 2,
    question_id: '0bfa14b6-283d-4113-ab78-3fc21e21bcda',
    response_key: 'full_time',
    value: 'Full-Time',
  },
  // company
  // description
  {
    id: '51c823d3-6961-45c4-85ee-3a13c4a9703d',
    created_date: new Date(),
    priority: 1,
    question_id: '97e4b49d-b178-48ce-865f-c707ef48c0a5',
    response_key: 'description',
    value: '',
  },
  // location
  {
    id: 'ef5428fa-8f93-4c90-9df7-4c34921343ce',
    created_date: new Date(),
    priority: 1,
    question_id: '8b2245ce-709b-4e59-ac31-8a4af3359b89',
    response_key: 'location',
    value: '',
  },
  // logo
  {
    id: 'fa60b24b-a632-4c37-8574-00473e88190a',
    created_date: new Date(),
    priority: 1,
    question_id: '7865a89d-4621-4c70-83ef-b4431123b95e',
    response_key: 'logo',
    value: '',
  },
  // name
  {
    id: '2f9d015f-974d-489e-a6e8-aeed96486c90',
    created_date: new Date(),
    priority: 1,
    question_id: '6fb3d210-6120-4fa1-8771-87d5a7172342',
    response_key: 'name',
    value: '',
  },
  // size
  {
    id: 'c0c12949-b98c-4b8e-a424-148b57f3e117',
    created_date: new Date(),
    priority: 1,
    question_id: 'e83bb9d4-0ef0-490c-8a09-e25a91d6d2ab',
    response_key: 'small_startup',
    value: '1 - 10',
  },
  {
    id: 'bfcddde9-d1c7-492a-91e2-fd6505627817',
    created_date: new Date(),
    priority: 2,
    question_id: 'e83bb9d4-0ef0-490c-8a09-e25a91d6d2ab',
    response_key: 'startup',
    value: '11 - 50',
  },
  {
    id: '4ec7075b-957f-4e25-8256-ebdf34e997f5',
    created_date: new Date(),
    priority: 3,
    question_id: 'e83bb9d4-0ef0-490c-8a09-e25a91d6d2ab',
    response_key: 'mid_sized',
    value: '51 - 250',
  },
  {
    id: 'b6d518c1-c812-4be9-a178-b80aa2392d29',
    created_date: new Date(),
    priority: 4,
    question_id: 'e83bb9d4-0ef0-490c-8a09-e25a91d6d2ab',
    response_key: 'large',
    value: '251 +',
  },
  // website
  {
    id: 'ffc15427-30ed-449e-a5ad-de9fce7781a9',
    created_date: new Date(),
    priority: 1,
    question_id: 'c114925b-d250-456b-9745-98db88274670',
    response_key: 'website',
    value: '',
  },
];

const seedQuestions = async () => {
  await Promise.all(
    questions.map(async el => {
      const queryText = `
      INSERT INTO questions(
        category,
        created_date,
        id,
        priority,
        question_key,
        question_text,
        required,
        response_limit,
        subtext
      )
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (id) DO UPDATE SET
        category = EXCLUDED.category,
        created_date = EXCLUDED.created_date,
        priority = EXCLUDED.priority,
        question_key = EXCLUDED.question_key,
        question_text = EXCLUDED.question_text,
        required = EXCLUDED.required,
        response_limit = EXCLUDED.response_limit,
        subtext = EXCLUDED.subtext
    `;
      const values = [
        el.category,
        el.created_date,
        el.id,
        el.priority,
        el.question_key,
        el.question_text,
        el.required,
        el.response_limit,
        el.subtext,
      ];
      await singleQuery({
        queryText,
        values,
      });
    }),
  );
};

const seedResponses = async () => {
  await Promise.all(
    responses.map(async el => {
      const queryText = `
      INSERT INTO question_responses(
        created_date,
        id,
        priority,
        question_id,
        response_key,
        value
      )
      VALUES($1, $2, $3, $4, $5, $6)
      ON CONFLICT (id) DO UPDATE SET
        created_date = EXCLUDED.created_date,
        priority = EXCLUDED.priority,
        question_id = EXCLUDED.question_id,
        response_key = EXCLUDED.response_key,
        value = EXCLUDED.value
    `;
      const values = [
        el.created_date,
        el.id,
        el.priority,
        el.question_id,
        el.response_key,
        el.value,
      ];
      await singleQuery({
        queryText,
        values,
      });
    }),
  );
};

module.exports = { seedQuestions, seedResponses };
