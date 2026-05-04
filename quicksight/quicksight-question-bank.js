/**
 * QuickSight Essentials — Question Bank
 * Single source of truth for both inline section quizzes and the
 * final evaluation. The evaluation samples 40 questions weighted by
 * module exam-weight and difficulty mix.
 *
 * Schema:
 *   window.QS_QUESTION_BANK = {
 *     m{N}: {
 *       s{M}: [
 *         { id, q, options:[a,b,c,d], correctIndex, explanation, difficulty }
 *       ]
 *     }
 *   }
 *
 * Difficulty: 'easy' | 'medium' | 'hard'
 * IDs are stable strings (qs-mN-sM-iX) so analytics can track per-question stats later.
 */
window.QS_QUESTION_BANK = {

  // ============ MODULE 1: Introduction & First Look (10% weight) ============
  m1: {
    s1: [
      {
        id: 'qs-m1-s1-i1',
        q: 'Which sequence correctly describes the QuickSight authoring pipeline?',
        options: [
          'Source → Query → Report',
          'Dataset → Analysis → Dashboard',
          'Table → View → Export',
          'SPICE → Direct → Embed'
        ],
        correctIndex: 1,
        explanation: 'Data flows in as a dataset, you build privately in an analysis, then publish a dashboard for readers.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m1-s1-i2',
        q: 'What is the key difference between an analysis and a dashboard in QuickSight?',
        options: [
          'Analyses use SPICE; dashboards use Direct Query',
          'Analyses are private build environments for authors; dashboards are published, read-only artefacts for readers',
          'Analyses are static; dashboards refresh automatically',
          'Analyses cost money; dashboards are free to share'
        ],
        correctIndex: 1,
        explanation: 'An analysis is the author sandbox — only the author and shared collaborators see it. A dashboard is the published, read-only version that readers consume.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m1-s1-i3',
        q: 'Which AWS service does QuickSight use natively for authentication and access control?',
        options: ['Cognito', 'KMS', 'IAM', 'Secrets Manager'],
        correctIndex: 2,
        explanation: 'QuickSight integrates natively with AWS IAM for authentication and authorisation — your existing AWS identity setup applies.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m1-s1-i4',
        q: 'A reader wants to change the data shown in a published dashboard. What can they do?',
        options: [
          'Edit the visual definitions directly',
          'Interact with filters and parameters the author exposed, but cannot change visual definitions',
          'Switch the dataset behind the dashboard',
          'Republish the analysis as a new dashboard'
        ],
        correctIndex: 1,
        explanation: 'Readers can interact with filters, parameters, and drill-downs the author exposed, but they cannot modify the visual definitions themselves.',
        difficulty: 'medium'
      }
    ],
    s2: [
      {
        id: 'qs-m1-s2-i1',
        q: 'What does SPICE stand for in QuickSight?',
        options: [
          'Secure Performant In-memory Calculation Engine',
          'Super-fast, Parallel, In-memory Calculation Engine',
          'Scalable Predictive Intelligence Compute Engine',
          'Standard Proprietary Indexed Caching Engine'
        ],
        correctIndex: 1,
        explanation: 'SPICE = Super-fast, Parallel, In-memory Calculation Engine — QuickSight\'s columnar in-memory store.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m1-s2-i2',
        q: 'Which QuickSight edition is required for row-level security (RLS)?',
        options: ['Standard', 'Enterprise', 'Both editions support it', 'Neither — RLS is only on Athena'],
        correctIndex: 1,
        explanation: 'RLS, column-level security, AD/SAML SSO, embedded analytics, VPC connections, and QuickSight Q are all Enterprise-only.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m1-s2-i3',
        q: 'You need a dashboard with seconds-fresh data from a Redshift cluster. Which query mode fits best?',
        options: [
          'SPICE with hourly refresh',
          'SPICE with manual refresh',
          'Direct Query',
          'Either; freshness is identical'
        ],
        correctIndex: 2,
        explanation: 'Direct Query runs against the source live on every interaction — the right choice when freshness is critical and SPICE refresh frequency would not be enough.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m1-s2-i4',
        q: 'How does Enterprise edition price readers differently from Standard?',
        options: [
          'Both editions charge readers the same flat monthly fee',
          'Enterprise charges readers per session (capped monthly); Standard treats everyone as an author',
          'Enterprise readers are free; Standard readers pay per query',
          'Enterprise readers are billed per dashboard view at full author rates'
        ],
        correctIndex: 1,
        explanation: 'Enterprise reader pricing is per-session with a monthly cap, which scales well for organisations with many casual viewers. Standard has no separate reader role.',
        difficulty: 'medium'
      }
    ],
    s3: [
      {
        id: 'qs-m1-s3-i1',
        q: 'Which three QuickSight user roles exist in Enterprise edition?',
        options: [
          'Owner, Editor, Viewer',
          'Admin, Author, Reader',
          'Root, User, Guest',
          'Manager, Analyst, Consumer'
        ],
        correctIndex: 1,
        explanation: 'Admin manages the account and users; Authors build datasets/analyses/dashboards; Readers consume shared dashboards (Reader role is Enterprise-only).',
        difficulty: 'easy'
      },
      {
        id: 'qs-m1-s3-i2',
        q: 'You signed up for QuickSight in us-east-1, but a colleague tries to invite users from us-west-2 and sees an empty account. Why?',
        options: [
          'They lack IAM permissions',
          'QuickSight users are scoped to the region where the account was set up',
          'The Enterprise edition has not been enabled in that region',
          'Their browser is caching a stale session'
        ],
        correctIndex: 1,
        explanation: 'QuickSight is per-AWS-account-per-region. Switching the AWS console region effectively switches you to a different (possibly empty) QuickSight account.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m1-s3-i3',
        q: 'After signing up, where do you change which AWS services QuickSight is allowed to access?',
        options: [
          'In IAM → roles',
          'In QuickSight → Manage QuickSight → Security & permissions',
          'In the AWS billing console',
          'You cannot change it after sign-up'
        ],
        correctIndex: 1,
        explanation: 'Manage QuickSight → Security & permissions is where you grant or revoke access to S3 buckets, Athena workgroups, Redshift, and other AWS sources.',
        difficulty: 'medium'
      }
    ],
    s4: [
      {
        id: 'qs-m1-s4-i1',
        q: 'Where in the QuickSight workspace would you go to define a scheduled SPICE refresh?',
        options: ['Analyses', 'Datasets', 'Dashboards', 'Topics'],
        correctIndex: 1,
        explanation: 'Refreshes, joins, prep work, and dataset-level calculated fields all live in the Datasets area.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m1-s4-i2',
        q: 'You changed several visuals in an analysis. What happens to the published dashboard built from it?',
        options: [
          'Dashboard updates automatically when you save the analysis',
          'Dashboard remains unchanged until you explicitly Replace dashboard / Republish',
          'Dashboard is deleted and must be recreated',
          'Dashboard auto-versions and shows a history selector to readers'
        ],
        correctIndex: 1,
        explanation: 'Dashboards are explicit publish events. This protects readers from in-progress edits — you must explicitly republish to push changes.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m1-s4-i3',
        q: 'Which navigation area holds QuickSight Q natural-language query topics?',
        options: ['Datasets', 'Analyses', 'Topics', 'Folders'],
        correctIndex: 2,
        explanation: 'Topics is the dedicated area for QuickSight Q — natural-language query setup and management lives there.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m1-s4-i4',
        q: 'In the analysis canvas, what is the Properties panel on the right used for?',
        options: [
          'Browsing all datasets in the account',
          'Formatting the selected visual, configuring field wells, and setting filter targets',
          'Opening published dashboards',
          'Managing user roles and permissions'
        ],
        correctIndex: 1,
        explanation: 'The right-side Properties panel is contextual to the selected visual — formatting, field wells, and filter targets all configured here.',
        difficulty: 'medium'
      }
    ],
    s5: [
      {
        id: 'qs-m1-s5-i1',
        q: 'In the SF-themed datasets, which field joins sf-sales-orders to sf-customers?',
        options: ['order_id', 'customer_id', 'region', 'segment'],
        correctIndex: 1,
        explanation: 'sf-sales-orders has customer_id as its foreign key into sf-customers. Region and segment exist on both for QA purposes.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m1-s5-i2',
        q: 'When you drag a single dimension field onto a blank canvas, what does QuickSight\'s AutoGraph create by default?',
        options: [
          'A KPI showing the count',
          'A horizontal bar chart with a count of records by that dimension',
          'An empty visual; you must pick a type',
          'A pie chart with all distinct values'
        ],
        correctIndex: 1,
        explanation: 'AutoGraph picks a horizontal bar chart with count of records as a sensible default for a single dimension drop.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m1-s5-i3',
        q: 'During CSV upload, QuickSight inferred order_date as a String instead of Date. What is the cleanest fix?',
        options: [
          'Re-upload the file with a different name',
          'Edit the dataset, change the column type to Date with the correct format string',
          'Delete the column and recreate it',
          'Change the file at the OS level and try again'
        ],
        correctIndex: 1,
        explanation: 'Edit the dataset and change the column\'s data type — set the type to Date with the matching format (yyyy-MM-dd for these CSVs).',
        difficulty: 'medium'
      }
    ]
  },

  // ============ MODULE 2: Data Preparation & Connections (20% weight) ============
  m2: {
    s1: [
      {
        id: 'qs-m2-s1-i1',
        q: 'Which AWS service is QuickSight\'s preferred way to query partitioned data sitting in S3?',
        options: ['DynamoDB', 'Athena', 'EMR', 'Glue ETL'],
        correctIndex: 1,
        explanation: 'Athena handles partitioning, column projection, and Parquet decoding for you — it is the recommended bridge between QuickSight and S3 for analytics.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m2-s1-i2',
        q: 'What is the practical difference between a "data source" and a "dataset" in QuickSight?',
        options: [
          'They are interchangeable terms',
          'A data source is the connection (host/credentials); a dataset is the query or table on top of it',
          'A data source is for SPICE; a dataset is for Direct Query',
          'A data source is shared; a dataset is always private'
        ],
        correctIndex: 1,
        explanation: 'Data source = the connection itself (Snowflake host, credentials, etc.). Dataset = a query or table built on a data source. One data source can power many datasets.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m2-s1-i3',
        q: 'Why might a team prefer shared data sources over personal data sources?',
        options: [
          'Shared sources are cheaper',
          'Credentials live in one place — rotation becomes a single-step operation across all dependent datasets',
          'Shared sources support more data types',
          'Personal sources cannot be used in published dashboards'
        ],
        correctIndex: 1,
        explanation: 'A shared source centralises credentials. When a password rotates, you update once and all dependent datasets keep working.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m2-s1-i4',
        q: 'Which authentication method do SaaS sources like Salesforce and Jira typically require?',
        options: ['IAM role', 'OAuth or API key', 'AD username/password', 'Kerberos'],
        correctIndex: 1,
        explanation: 'External SaaS apps don\'t live in your AWS account, so IAM doesn\'t apply. They authenticate via OAuth or API key per the source vendor\'s rules.',
        difficulty: 'easy'
      }
    ],
    s2: [
      {
        id: 'qs-m2-s2-i1',
        q: 'A 50M-row Redshift table updates hourly and is read by 200 users daily. Which query mode is generally better?',
        options: [
          'Direct Query — keeps data live',
          'SPICE — sub-second response, source unburdened from analytics queries, hourly refresh keeps data current enough',
          'Mixed — half SPICE, half Direct Query',
          'Always SPICE regardless of size'
        ],
        correctIndex: 1,
        explanation: 'Hourly freshness fits SPICE refresh well, and 200 daily readers concurrently hitting Redshift via Direct Query would hammer your cluster. SPICE serves all 200 from in-memory.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m2-s2-i2',
        q: 'What is the hidden cost trap of using Direct Query against Athena?',
        options: [
          'Athena charges a flat monthly fee per dataset',
          'Every dashboard interaction triggers an Athena scan, multiplying scan costs across users and visuals',
          'Athena cannot return data fast enough for QuickSight',
          'Athena requires SPICE as a cache layer'
        ],
        correctIndex: 1,
        explanation: 'Direct Query against Athena means every visual interaction = one scan. A 6-visual dashboard viewed by 50 users = 300 scans. SPICE imports once and serves all reads from memory.',
        difficulty: 'hard'
      },
      {
        id: 'qs-m2-s2-i3',
        q: 'Can you mix SPICE and Direct Query datasets in the same analysis?',
        options: [
          'No, an analysis must use one mode for all datasets',
          'Yes, query mode is a per-dataset choice and can vary across datasets in the same analysis',
          'Only in Enterprise edition',
          'Only if the datasets share the same data source'
        ],
        correctIndex: 1,
        explanation: 'Query mode is per-dataset. Different datasets in the same analysis can use different modes.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m2-s2-i4',
        q: 'Which of the following is a valid reason to choose Direct Query over SPICE?',
        options: [
          'You need many users to see the dashboard simultaneously',
          'Compliance forbids copying data outside the source database',
          'Your dashboards are infrequently used',
          'You want lower source database load'
        ],
        correctIndex: 1,
        explanation: 'Direct Query keeps data inside the source. SPICE physically copies data into QuickSight\'s engine — which some compliance regimes forbid.',
        difficulty: 'medium'
      }
    ],
    s3: [
      {
        id: 'qs-m2-s3-i1',
        q: 'When connecting QuickSight to data in S3, what is the role of the manifest file?',
        options: [
          'It encrypts the data at rest',
          'It tells QuickSight which S3 paths to read and what file format / delimiter / header settings to use',
          'It stores user permissions for the dataset',
          'It tracks SPICE refresh history'
        ],
        correctIndex: 1,
        explanation: 'The manifest is a small JSON file pointing QuickSight at the S3 URIs to ingest, plus format details (CSV vs JSON, delimiter, header presence).',
        difficulty: 'medium'
      },
      {
        id: 'qs-m2-s3-i2',
        q: 'Which QuickSight edition is required to use a VPC connection for private database access?',
        options: ['Standard', 'Enterprise', 'Both', 'Neither — VPC connections do not exist in QuickSight'],
        correctIndex: 1,
        explanation: 'VPC connections — needed to reach databases without exposing them to the public internet — are an Enterprise-only feature.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m2-s3-i3',
        q: 'When should you prefer Custom SQL over QuickSight\'s visual join editor?',
        options: [
          'When the transform needs CTEs, window functions, or complex filtering that the join editor cannot express',
          'When the source is S3',
          'When you want SPICE',
          'When the dataset is small'
        ],
        correctIndex: 0,
        explanation: 'Custom SQL runs in your source database (faster than QuickSight\'s join engine) and supports CTEs, window functions, and complex filters that the visual editor cannot express.',
        difficulty: 'medium'
      }
    ],
    s4: [
      {
        id: 'qs-m2-s4-i1',
        q: 'You want every customer in the result, including those with no orders. Which join type fits?',
        options: ['Inner', 'Left (orders on left, customers on right)', 'Right (orders on left, customers on right)', 'Cross'],
        correctIndex: 2,
        explanation: 'With orders on the left and customers on the right, a right join keeps every customer — including ones who never placed an order.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m2-s4-i2',
        q: 'Why must cross-source joins (e.g., Redshift table joined to a CSV) be SPICE-mode?',
        options: [
          'CSV files cannot be Direct Query',
          'QuickSight cannot push a join down to two different databases at once, so it has to materialise both sides into SPICE and join in memory',
          'Cross-source joins are too slow without SPICE',
          'Direct Query does not support joins of any kind'
        ],
        correctIndex: 1,
        explanation: 'Direct Query pushes the query to one source database. With two sources, there is no shared engine — QuickSight must hold both in SPICE to do the join itself.',
        difficulty: 'hard'
      },
      {
        id: 'qs-m2-s4-i3',
        q: 'You join a string column to an integer column in the visual join editor. What happens?',
        options: [
          'QuickSight auto-converts the types',
          'The join silently returns zero rows',
          'You get an error preventing save',
          'QuickSight imports both as text and matches on string equality'
        ],
        correctIndex: 1,
        explanation: 'Type mismatches in joins fail silently with zero matches. Always verify both join columns are the same type before relying on the result.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m2-s4-i4',
        q: 'After joining two tables your row count is 5× the larger source table. What is the most likely cause?',
        options: [
          'You used a left join instead of inner',
          'Duplicate join-key values on at least one side caused a many-to-many multiplication',
          'SPICE compressed the data wrong',
          'The source database has stale statistics'
        ],
        correctIndex: 1,
        explanation: 'Many-to-many joins multiply rows. If your row count blows up, look for duplicate keys in the source tables.',
        difficulty: 'hard'
      }
    ],
    s5: [
      {
        id: 'qs-m2-s5-i1',
        q: 'Where should you define a calculated field that will be used in 5 different dashboards?',
        options: [
          'In each analysis separately',
          'At the dataset level — defined once, available to every analysis built on it',
          'As a parameter',
          'In a custom SQL view at the source database'
        ],
        correctIndex: 1,
        explanation: 'Define reusable calcs at the dataset level. Analysis-level calcs are for one-off, visual-specific logic.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m2-s5-i2',
        q: 'What does assigning a "geographic role" (e.g., State or City) to a string column unlock?',
        options: [
          'Faster string comparisons',
          'The ability to use that column as a geospatial dimension in maps',
          'Automatic translation across languages',
          'Compression in SPICE'
        ],
        correctIndex: 1,
        explanation: 'Geographic roles tell QuickSight to treat the field as a place — enabling filled maps, points-on-map, and clustering visuals.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m2-s5-i3',
        q: 'Why does a date stored as a string break time-series visuals?',
        options: [
          'String dates use too much memory',
          'Without the Date type, QuickSight cannot do period rollups, date filters, or chronological sorting on the field',
          'String dates fail to render in tooltips',
          'They cause SPICE refresh to fail'
        ],
        correctIndex: 1,
        explanation: 'Dates as strings sort alphabetically, can\'t roll up to month/quarter, and can\'t be used in date filters. Always type-cast at prep time.',
        difficulty: 'medium'
      }
    ],
    s6: [
      {
        id: 'qs-m2-s6-i1',
        q: 'What is the maximum SPICE refresh frequency on QuickSight Standard edition?',
        options: ['Hourly', 'Daily', 'Every 15 minutes', 'Continuous'],
        correctIndex: 1,
        explanation: 'Standard edition refreshes daily at most. Enterprise allows hourly, with multiple schedules per day.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m2-s6-i2',
        q: 'When does incremental refresh stop being correct?',
        options: [
          'When the source database is restarted',
          'When records older than the look-back window are updated in the source — those changes are missed',
          'When SPICE capacity runs low',
          'When QuickSight switches to Direct Query mode'
        ],
        correctIndex: 1,
        explanation: 'Incremental refresh assumes only the recent window changes. Updates to older records are silently missed unless you do a periodic full refresh.',
        difficulty: 'hard'
      },
      {
        id: 'qs-m2-s6-i3',
        q: 'Which API call would you use to trigger a SPICE refresh from an external system (e.g., a Lambda after an ETL completes)?',
        options: ['StartQuery', 'CreateIngestion', 'RefreshDataset', 'PutSpiceData'],
        correctIndex: 1,
        explanation: 'CreateIngestion is the QuickSight API call that triggers a SPICE ingestion (refresh) for a dataset.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m2-s6-i4',
        q: 'How do you find out about silent SPICE refresh failures?',
        options: [
          'QuickSight automatically recovers, no notification needed',
          'Configure email alerts in the dataset\'s Refresh schedule settings',
          'Check the AWS billing console',
          'Refreshes never fail in QuickSight'
        ],
        correctIndex: 1,
        explanation: 'Failed refreshes are silent unless you configure notification emails. Without alerts, dashboards quietly serve stale data.',
        difficulty: 'medium'
      }
    ],
    s7: [
      {
        id: 'qs-m2-s7-i1',
        q: 'In Lab 2 you used a left join (orders on the left, customers on the right). Why?',
        options: [
          'It is the only join type QuickSight supports',
          'To keep every order, even if a customer record is somehow missing — preserving the full sales picture',
          'Inner join would have been slower',
          'Left join is required when both sides are CSV files'
        ],
        correctIndex: 1,
        explanation: 'Left join keeps every order on the left side. Inner would silently drop orders without a matching customer record, hiding data quality issues.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m2-s7-i2',
        q: 'In Lab 2, why was profit_margin wrapped in an ifelse guard checking whether revenue equals zero?',
        options: [
          'Revenue can never be zero, but it is good practice',
          'To prevent a division-by-zero error when a row has zero revenue',
          'To make the field load faster',
          'Because QuickSight requires all calculated fields to use ifelse'
        ],
        correctIndex: 1,
        explanation: 'Division by zero would error or return NaN. The ifelse returns 0 instead — a safer default for downstream visuals.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m2-s7-i3',
        q: 'The Lab 2 calculated field profit_margin lives at dataset level. What does this mean for reuse?',
        options: [
          'Only one analysis can use it',
          'Every analysis built on this dataset automatically has access to profit_margin without redefining it',
          'It must be redefined in each analysis',
          'It only works in SPICE mode'
        ],
        correctIndex: 1,
        explanation: 'Dataset-level calcs are first-class fields available to every analysis built on the dataset — define once, use everywhere.',
        difficulty: 'easy'
      }
    ]
  },

  // ============ MODULE 3: Building Visuals (25% weight) ============
  m3: {
    s1: [
      {
        id: 'qs-m3-s1-i1',
        q: 'You need to show revenue trend across 3 product categories over 24 months. Which visual is the strongest fit?',
        options: ['Pie chart', 'Line chart with category as the colour series', 'Stacked bar chart', 'Pivot table'],
        correctIndex: 1,
        explanation: 'Line chart shows trend over time naturally. Three colour series is well within readable limits.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m3-s1-i2',
        q: 'Why is a pie chart with 12 slices considered poor practice?',
        options: [
          'Pie charts are deprecated in QuickSight',
          'The human eye cannot accurately compare angles past about 6 slices',
          'They take too long to render',
          'They cannot use conditional formatting'
        ],
        correctIndex: 1,
        explanation: 'Beyond ~6 slices, angle comparison breaks down. Switch to a horizontal bar chart for many categories.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m3-s1-i3',
        q: 'You need to show which 3 sales reps closed the most deals out of 50 reps. Which visual fits best?',
        options: ['Heat map', 'Horizontal bar with Top-N filter', 'Scatter plot', 'KPI'],
        correctIndex: 1,
        explanation: 'Horizontal bar chart with a Top-N filter is the cleanest way to show ranked categorical comparisons.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m3-s1-i4',
        q: 'When is a stacked bar chart the wrong choice?',
        options: [
          'When you need to show composition and the total is also meaningful',
          'When the middle segments are the most important to compare — stacks make middle-segment comparison hard',
          'When you have time-series data',
          'When you only have two categories'
        ],
        correctIndex: 1,
        explanation: 'Bottom segments share a baseline (easy to compare); middle segments float and are hard to compare across bars.',
        difficulty: 'hard'
      }
    ],
    s2: [
      {
        id: 'qs-m3-s2-i1',
        q: 'You drop a date field and a numeric measure onto a blank canvas. What does AutoGraph create?',
        options: ['A KPI', 'A line chart', 'A horizontal bar chart', 'A scatter plot'],
        correctIndex: 1,
        explanation: 'Date + measure → AutoGraph picks a line chart as the natural time-series fit.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m3-s2-i2',
        q: 'Where do you change a measure\'s aggregation from Sum to Average?',
        options: [
          'In the dataset\'s prep view',
          'In the field well — click the measure pill and pick the aggregation',
          'In Manage QuickSight settings',
          'You cannot change it; aggregations are fixed'
        ],
        correctIndex: 1,
        explanation: 'Click the measure in its field well to swap aggregation: Sum, Avg, Min, Max, Count, Distinct count, Median, Percentile, etc.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m3-s2-i3',
        q: 'What does the "Small multiples" field well do on a bar chart?',
        options: [
          'Shrinks all bars proportionally',
          'Splits the chart into a grid of separate small charts, one per value of the small-multiples field',
          'Adds a smaller secondary y-axis',
          'Hides bars below a threshold'
        ],
        correctIndex: 1,
        explanation: 'Small multiples (a.k.a. trellis or facet) creates a panel grid — one mini-chart per category — for side-by-side comparison.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m3-s2-i4',
        q: 'You drop two measures and no dimensions onto the canvas. What does AutoGraph pick?',
        options: ['Line chart', 'Scatter plot', 'KPI', 'Pie chart'],
        correctIndex: 1,
        explanation: 'Two measures with no dimension → scatter plot, which lets you visualise the relationship between the two measures.',
        difficulty: 'medium'
      }
    ],
    s3: [
      {
        id: 'qs-m3-s3-i1',
        q: 'When should you prefer a horizontal bar over a vertical column chart?',
        options: [
          'Always — horizontal is universally better',
          'When category labels are long and would be cramped or rotated on a vertical x-axis',
          'When you have a time series',
          'When you need conditional formatting'
        ],
        correctIndex: 1,
        explanation: 'Horizontal bars give long labels room to breathe. Vertical columns work better for short labels (months, regions, statuses).',
        difficulty: 'easy'
      },
      {
        id: 'qs-m3-s3-i2',
        q: 'What is the recommended maximum number of series on a single line chart, and why?',
        options: [
          '2 — anything more is overkill',
          '5 — beyond that it becomes spaghetti and individual lines are hard to track',
          '10 — QuickSight enforces this limit',
          'Unlimited — line charts handle any number'
        ],
        correctIndex: 1,
        explanation: 'About 5 series is the practical readability limit. Beyond that, lines overlap, colours collide, and the message is lost.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m3-s3-i3',
        q: 'How do you add a sparkline trend line beneath a KPI primary value?',
        options: [
          'You can\'t — KPIs don\'t support trends',
          'Drop a date field into the KPI\'s Trend group field well',
          'Add a separate line chart and overlap them visually',
          'Enable "Sparkline mode" in the analysis settings'
        ],
        correctIndex: 1,
        explanation: 'A date field in the Trend group well produces a built-in sparkline that scales with the KPI\'s primary value.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m3-s3-i4',
        q: 'Which line-chart x-axis configuration is appropriate?',
        options: [
          'Categorical (e.g., region or product)',
          'Continuous (date or numeric)',
          'Either works equally well',
          'Boolean'
        ],
        correctIndex: 1,
        explanation: 'Lines imply continuity. Use them only for continuous x-axes (date or numeric). Categories should be bars.',
        difficulty: 'medium'
      }
    ],
    s4: [
      {
        id: 'qs-m3-s4-i1',
        q: 'You need to show "Revenue by Region by Quarter with subtotals at every level". Which table type fits?',
        options: ['Regular table', 'Pivot table', 'Both work equally well', 'KPI grid'],
        correctIndex: 1,
        explanation: 'Pivots support cross-tabulation, hierarchy collapse/expand, and subtotals at every grouping level — perfect for multi-dimensional summaries.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m3-s4-i2',
        q: 'Which conditional-formatting style on a pivot cell is best for "show me a heat map of margin where higher = greener"?',
        options: ['Solid colour with thresholds', 'Gradient (continuous colour scale)', 'Bars in cell', 'Bold text only'],
        correctIndex: 1,
        explanation: 'Gradient (continuous scale) gives a heat-map effect across a measure\'s range. Solid colour is for discrete thresholds.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m3-s4-i3',
        q: 'Why is a regular table preferred over a pivot when users will export to Excel?',
        options: [
          'Regular tables export as CSV; pivots cannot be exported',
          'Regular tables are flat — they paste into Excel as-is, ready for further work without restructuring',
          'Pivots have an export size limit',
          'Excel cannot open pivots'
        ],
        correctIndex: 1,
        explanation: 'Regular tables are flat row-per-record exports that work in Excel without reshaping. Pivots export but require pivot-style handling downstream.',
        difficulty: 'medium'
      }
    ],
    s5: [
      {
        id: 'qs-m3-s5-i1',
        q: 'What is the difference between a filled map and a points-on-map visual?',
        options: [
          'Filled maps shade administrative regions by a measure; points maps plot each location as a pin/bubble',
          'Filled maps need lat/long; points maps need country names',
          'Filled maps work in Standard edition; points maps need Enterprise',
          'They are the same; just different names'
        ],
        correctIndex: 0,
        explanation: 'Filled maps colour regions (countries, states) by a measure. Points maps plot lat/long pins, optionally sized or coloured by a measure.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m3-s5-i2',
        q: 'What must you do before a string column like "state" can be used in a map visual?',
        options: [
          'Convert it to lat/long manually',
          'Assign it a geographic role (e.g., State) in the dataset',
          'Upload it as a separate dataset',
          'Use Direct Query mode'
        ],
        correctIndex: 1,
        explanation: 'Geographic roles (Country, State, City, ZIP, Lat, Long) are how QuickSight knows to treat a field as a place for mapping.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m3-s5-i3',
        q: 'You have a dataset with city names like "Springfield" but no parent state or country. What is the risk?',
        options: [
          'Maps will not render at all',
          'QuickSight may geocode to the wrong "Springfield" since the name is ambiguous across many states/countries',
          'Performance will be slower',
          'SPICE refresh will fail'
        ],
        correctIndex: 1,
        explanation: 'Without parent context (state, country) ambiguous city names geocode unpredictably. Always pair city with state/country and assign roles to all of them.',
        difficulty: 'medium'
      }
    ],
    s6: [
      {
        id: 'qs-m3-s6-i1',
        q: 'You want every chart in your analysis to use SourceFuse brand colours. What QuickSight feature handles this?',
        options: ['Custom themes', 'Conditional formatting', 'Default visual settings', 'Brand kits in S3'],
        correctIndex: 0,
        explanation: 'Custom themes let you set primary colours, fonts, and a data-colour palette and apply them to any analysis for brand consistency.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m3-s6-i2',
        q: 'Where do you apply conditional formatting (red/amber/green) to a KPI\'s primary value?',
        options: [
          'In the dataset prep view',
          'In Format visual → Conditional formatting on the KPI',
          'In a separate calculated field',
          'In the QuickSight admin console'
        ],
        correctIndex: 1,
        explanation: 'Format visual → Conditional formatting is where you set thresholds and colours for the KPI primary value.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m3-s6-i3',
        q: 'What is the difference between formatting a number on the field versus on the visual?',
        options: [
          'No difference',
          'Formatting on the field applies everywhere it appears in the analysis; formatting on the visual is local to that one visual',
          'Field-level formatting is read-only',
          'Visual-level formatting overrides field-level only in PDF exports'
        ],
        correctIndex: 1,
        explanation: 'Field-level formatting cascades to every visual using the field. Visual-level overrides apply to one visual only — useful for one-off display tweaks.',
        difficulty: 'medium'
      }
    ],
    s7: [
      {
        id: 'qs-m3-s7-i1',
        q: 'How do you create a hierarchical drill-down on a column chart?',
        options: [
          'Add multiple fields to the same X-axis field well — QuickSight creates a hierarchy that readers can drill into by clicking',
          'Build a separate visual for each level and link them',
          'Use a parameter',
          'Drill-down is only available on pivot tables'
        ],
        correctIndex: 0,
        explanation: 'Multiple fields in the same field well create a drill hierarchy. Readers click a bar to drill into the next level, with breadcrumbs at the top.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m3-s7-i2',
        q: 'What is the difference between a filter action and a navigation action?',
        options: [
          'They are the same',
          'A filter action filters other visuals on the same sheet; a navigation action moves the reader to a different sheet',
          'Filter actions need Enterprise; navigation actions are free',
          'Filter actions only work on bar charts'
        ],
        correctIndex: 1,
        explanation: 'Filter action = click to filter same-sheet visuals. Navigation action = click to jump to another sheet (often pre-filtered via a parameter).',
        difficulty: 'medium'
      },
      {
        id: 'qs-m3-s7-i3',
        q: 'Where do you add fields that should appear in the tooltip but not on the visual itself?',
        options: [
          'They cannot be separated; tooltips show only the visual\'s fields',
          'In the Tooltip field well — set tooltip Type to Detailed and drag fields in',
          'In the dataset prep view',
          'In a custom JavaScript snippet'
        ],
        correctIndex: 1,
        explanation: 'Format visual → Tooltip → Type: Detailed gives you a Tooltip field well. Drag any field (including ones not on the visual) and they appear on hover.',
        difficulty: 'medium'
      }
    ],
    s8: [
      {
        id: 'qs-m3-s8-i1',
        q: 'In Lab 3, clicking a region bar caused the line chart to filter to that region. Which feature made that work?',
        options: [
          'A parameter control',
          'A filter action configured on the region bar visual targeting the line chart',
          'Cross-filtering is on by default in QuickSight',
          'The region bar and line chart shared a dataset, which auto-links them'
        ],
        correctIndex: 1,
        explanation: 'You explicitly added a filter action on the region bar with the line chart (and KPI and pivot) selected as targets. Cross-filtering is opt-in per visual.',
        difficulty: 'medium'
      },
      {
        id: 'qs-m3-s8-i2',
        q: 'In Lab 3, why was order_date placed in the trend group field well of the Total Revenue KPI?',
        options: [
          'It was a placeholder; any field would have worked',
          'To produce a sparkline showing revenue trend over time underneath the headline number',
          'KPIs require a date field to render',
          'It enables conditional formatting'
        ],
        correctIndex: 1,
        explanation: 'A date in the Trend group well generates a sparkline of the primary value over time — turning the KPI into a compact trend snapshot.',
        difficulty: 'easy'
      },
      {
        id: 'qs-m3-s8-i3',
        q: 'In Lab 3 the pivot\'s profit_margin used a gradient conditional format with red below 30% and green above 60%. What style of formatting is this?',
        options: [
          'Solid colour with discrete thresholds',
          'Gradient (continuous colour scale)',
          'In-cell bars',
          'Bold text emphasis'
        ],
        correctIndex: 1,
        explanation: 'A continuous red→green colour scale across the value range is a gradient. Solid colour would assign discrete buckets (red/yellow/green) per threshold.',
        difficulty: 'medium'
      }
    ]
  }

};
