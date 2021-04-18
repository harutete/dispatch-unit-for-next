import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Query = {
  __typename?: 'Query';
  members: Array<Member>;
  linkSkills: Array<Maybe<LinkSkill>>;
};

export type Member = {
  __typename?: 'Member';
  member_id: Scalars['Int'];
  member_name: Scalars['String'];
};

export type LinkSkill = {
  __typename?: 'LinkSkill';
  category: Scalars['String'];
  category_name?: Maybe<Scalars['String']>;
  effect: Scalars['Int'];
  skill_name: Scalars['String'];
  is_act2?: Maybe<Scalars['Boolean']>;
  members: Array<Member>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type CompanyMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type CompanyMembersQuery = (
  { __typename?: 'Query' }
  & { members: Array<(
    { __typename?: 'Member' }
    & Pick<Member, 'member_id' | 'member_name'>
  )>, linkSkills: Array<Maybe<(
    { __typename?: 'LinkSkill' }
    & Pick<LinkSkill, 'category' | 'category_name' | 'effect' | 'skill_name' | 'is_act2'>
    & { members: Array<(
      { __typename?: 'Member' }
      & Pick<Member, 'member_id' | 'member_name'>
    )> }
  )>> }
);


export const CompanyMembersDocument = gql`
    query companyMembers {
  members {
    member_id
    member_name
  }
  linkSkills {
    category
    category_name
    effect
    skill_name
    is_act2
    members {
      member_id
      member_name
    }
  }
}
    `;

/**
 * __useCompanyMembersQuery__
 *
 * To run a query within a React component, call `useCompanyMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompanyMembersQuery(baseOptions?: Apollo.QueryHookOptions<CompanyMembersQuery, CompanyMembersQueryVariables>) {
        return Apollo.useQuery<CompanyMembersQuery, CompanyMembersQueryVariables>(CompanyMembersDocument, baseOptions);
      }
export function useCompanyMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanyMembersQuery, CompanyMembersQueryVariables>) {
          return Apollo.useLazyQuery<CompanyMembersQuery, CompanyMembersQueryVariables>(CompanyMembersDocument, baseOptions);
        }
export type CompanyMembersQueryHookResult = ReturnType<typeof useCompanyMembersQuery>;
export type CompanyMembersLazyQueryHookResult = ReturnType<typeof useCompanyMembersLazyQuery>;
export type CompanyMembersQueryResult = Apollo.QueryResult<CompanyMembersQuery, CompanyMembersQueryVariables>;