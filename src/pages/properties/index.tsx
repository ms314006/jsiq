import { Heading, Wrap, WrapItem } from "@chakra-ui/react"
import { Layout } from "components/Layout"
import { properties } from "utils/sample-data"
import { PropertySummary } from "components/PropertySummary"
import { NextChakraLink } from "components/NextChakraLink"
import { Chakra } from "components/Chakra"

interface PropertiesProps {
  cookies?: string
}

const PropertiesPage = ({ cookies }: PropertiesProps) => (
  <Chakra cookies={cookies}>
    <Layout>
      <Heading mb={4}>Available this weekend</Heading>
      <Wrap width="100%">
        {properties.map((property) => (
          <WrapItem key={property.id}>
            <NextChakraLink
              href="/properties/[id]"
              as={`/properties/${property.id}`}
            >
              <PropertySummary property={property} />
            </NextChakraLink>
          </WrapItem>
        ))}
      </Wrap>
    </Layout>
  </Chakra>
)

export default PropertiesPage
export { getServerSideProps } from "components/Chakra"
